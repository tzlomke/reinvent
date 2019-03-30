const db = require("../models");

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
const imageUpload = multer({
	storage: multlerS3({
		s3: s3,
		bucket: process.env.S3_BUCKET,
		acl: "public-read",
		key: (req, file, cb) => {
			cb(null, Date.now() + path.extname( file.originalname ) )
		},
		limits: { fileSize: 2000000 },
		contentType: multlerS3.AUTO_CONTENT_TYPE,
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

module.exports = {
	getUserByUsername: function(req, res) {
		db.User
			.find({ username: req.params.username })
			.populate("campaigns")
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	getUserById: function(req, res) {
		let id = req.params.id;
		console.log("ID: " + id);
		db.User
			.find({ _id: id })
			.populate("campaigns")
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	// editProfile: function(req, res) {
	// 	db.User
	// 		.find(req.params.username)

	// }

	uploadProfileImage: (req, res) => {
		imageUpload(req, res, (error) => {
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
					// If Successful
					const imageLocation = req.file.location;
					
					db.User
						.findOneAndUpdate({ username: req.params.username }, { $push: { profileImage: imageLocation } }, { new: true })
						.then(dbUser => res.json(dbUser))
						.catch(err => res.json(err));
				}
			}
		});
	}
}