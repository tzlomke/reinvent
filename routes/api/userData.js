const router = require('express').Router();
const userDataController = require('../../controllers/userDataConroller');

router.route("/:username")
	.get(userDataController.getUser);

router.route('/:username/profile-image-upload')
	.post(userDataController.uploadProfileImage);

module.exports = router;