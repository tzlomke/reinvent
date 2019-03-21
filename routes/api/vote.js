const router = require("express").Router();
const votesController = require("../../controllers/votesController");

// Matches with "/api/vote"
router.route("/")
    .get(votesController.findAll)
    .post(votesController.create);

// Matches with "/api/vote/:id"
router
    .route("/:id")
    .get(votesController.findById)
    .put(votesController.update)
    .delete(votesController.remove);

module.exports = router;