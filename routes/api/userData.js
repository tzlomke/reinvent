const router = require('express').Router();
const userDataController = require('../../controllers/userDataConroller');

router.route("/:username")
	.get(userDataController.getUser);

module.exports = router;