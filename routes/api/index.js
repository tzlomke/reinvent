const router = require("express").Router();
const campaignRoutes = require("./campaign");
const voteRoutes = require("./vote");

// Campaign routes
router.use("/campaign", campaignRoutes);

// vote routes
router.use("/vote", voteRoutes);

module.exports = router;
