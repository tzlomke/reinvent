const router = require('express').Router();
const resourceController = require('../../controllers/resourceController');

router.route("/")
    .get(resourceController.findAll)
    .post(resourceController.create)

router.route("/:id")
    .delete(resourceController.remove)
module.exports = router;