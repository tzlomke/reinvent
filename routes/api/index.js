const router = require("express").Router();
const campaignRoutes = require("./campaign");
const voteRoutes = require("./vote");
const userAuthRoutes = require("./userAuthentication");

// Campaign routes
router.use("/campaign", campaignRoutes);

// vote routes
router.use("/vote", voteRoutes);

router.use("/userAuthentication", userAuthRoutes);

module.exports = router;
