const router = require("express").Router();
const campaignRoutes = require("./campaign");
const voteRoutes = require("./vote");

// Campaign routes
router.use("/campaign", campaignRoutes);

// Discussion routes
// router.use("/discussion", discussionRoutes);

// vote routes
router.use("/vote", voteRoutes);

module.exports = router;
