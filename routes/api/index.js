const router = require("express").Router();
const voteRoutes = require("./vote");

// vote routes
router.use("/vote", voteRoutes);

module.exports = router;