const router = require('express').Router();
const userDataController = require('../../controllers/userDataConroller');

// Image Upload function in controller or directly on route?????????

router.route("/:username")
	.get(userDataController.getUser);

router.route("/:username/profile-image")
	.post(userDataController.uploadProfileImage);

module.exports = router;