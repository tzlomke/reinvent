const router = require('express').Router();
const eventController = require('../../controllers/eventController');

router.route('/')
    .get(eventController.findAll)
    .post(eventController.create)

router.route("/:id")
    .delete(eventController.remove)

module.exports = router;