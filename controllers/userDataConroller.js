const db = require("../models");
const path = require("path");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const url = require("url");

// Environmental Variables
require('dotenv').config({path: path.join(__dirname, '.env')});

// AWS S3 Configuration
const s3 = new aws.S3({
	accessKeyId: process.env.S3_ACCESS_KEY_ID,
	secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
	Bucket: process.env.S3_BUCKET
});

// Check File Type Function
const checkFileType = (file, cb) => {
	// Allowed File Types
	const fileTypes = /jpeg|jpg|png|gif/;
	// Check Extension
	const extensionName = fileTypes.test(path.extname(file.originalname).toLowerCase());
	// Check MIME Type
	const mimeType = fileTypes.test(file.mimeType);

	if(mimeType && extensionName) {
		return cb(null, true);
	} else {
		cb("The file must be one of the following types: .jpeg, .jpg, .png, .gif");
	}
};

// Image Upload Function
const profileImageUpload = multer({
	storage: multerS3({
		s3: s3,
		bucket: s3.Bucket,
		acl: "public-read",
		key: (req, file, cb) => {
			cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
		}
	}),
	limits: { fileSize: 2000000 },
	fileFilter: (req, file, cb) => {
		checkFileType(file, cb);
	}
}).single("profileImage");


module.exports = {
	getUser: function(req, res) {
		db.User
			.find({ username: req.params.username })
			.populate("campaigns")
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	// editProfile: function(req, res) {
	// 	db.User
	// 		.find(req.params.username)

	// }

	uploadProfileImage: function(req, res) {
		profileImageUpload(req, res, (error) => {
		if (error) {
			console.log(error);
			res.json({error: error});
		} else if (req.file === undefined) {
			res.json("Error: No file selected!");
		} else {
			const imageName = req.file.key;
			const imageLocation = req.file.location;

			db.User
				.findOneAndUpdate({ username: req.params.username }, { $push: { profileImage: imageLocation } }, { new: true })
				.then(dbUser => res.json(dbUser))
				.catch(err => res.json(err));
		}
	})}
}