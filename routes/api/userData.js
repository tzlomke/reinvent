const router = require('express').Router();
const userDataController = require('../../controllers/userDataConroller');

// Image Upload function in controller or directly on route?????????

require("dotenv").config();

// AWS S3 Requirements
const aws = require("aws-sdk");
const multlerS3 = require("multer-s3");
const multer = require("multer");
const path = require("path");

// AWS Configurations
const s3 = new aws.S3({
	secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
	accessKeyId: process.env.S3_ACCESS_KEY_ID,
	region: "us-east-2",
	bucket: process.env.S3_BUCKET,
});

// Upload Function
const profileImgUpload = multer({
	storage: multlerS3({
		s3: s3,
		bucket: process.env.S3_BUCKET,
		acl: "public-read",
		key: (req, file, cb) => {
			cb(null, Date.now().toString());
		},
		limits: { fileSize: 2000000 },
		fileFilter: (req, file, cb) => {
			checkFileType(file, cb);
		},
		metadata: (req, file, cb) => {
			cb(null, {fieldName: file.fieldname})
		}
	})
}).single("profileImage");

// Check File Type
const checkFileType = (file, cb) => {
	// Allowed File Types
	const fileTypes = /jpeg|jpg|png|gif/;
	// Check File Extension
	const extensionName = fileTypes.test(path.extname(file.originalname).toLowerCase());
	// Check MIME Type
	const mimeType = fileTypes.test(file.mimeType);

	if (mimeType && extensionName) {
		return cb(null, true);
	} else {
		cb("Uploaded files must be one of the following types: .jpeg, .jpg, .png, .gif");
	}
};

router.route("/:username")
	.get(userDataController.getUser);

router.post('/tzlomke/profile-image-upload', (req, res) => {
	profileImgUpload(req, res, (error) => {
		// console.log( 'requestOkokok', req.file );
		// console.log( 'error', error );
		if (error) {
			console.log('errors', error);
			res.json({
				error: error
			});
		} else {
			// If File not found
			if (req.file === undefined) {
				console.log('Error: No File Selected!');
				res.json('Error: No File Selected');
			} else {
				// If Success
				const imageName = req.file.key;
				const imageLocation = req.file.location;
				// Save the file name into database into profile model
				res.json({
					image: imageName,
					location: imageLocation
				});
			}
		}
	});
});

module.exports = router;