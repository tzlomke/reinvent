const router = require('express').Router();
const userDataController = require('../../controllers/userDataConroller');

// GET by Username
router.route("/:username")
	.get(userDataController.getUserByUsername);

// GET by User Id
router.route("/find/:id")
	.get(userDataController.getUserById);

// POST Profile Image
router.route('/:username/profile-image-upload')
	.post(userDataController.uploadProfileImage);

module.exports = router;