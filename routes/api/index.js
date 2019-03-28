const router = require("express").Router();
const campaignRoutes = require("./campaign");
const voteRoutes = require("./vote");
const discussionRoutes = require("./discussion");
const userAuthRoutes = require("./userAuthentication");
const userDataRoutes = require("./userData");
const newsFeed = require("./news-feed");

// Campaign routes
router.use("/campaign", campaignRoutes);

// vote routes
router.use("/vote", voteRoutes);

// Auth Routes
router.use("/userAuthentication", userAuthRoutes);

// User Data Routes
router.use("/profile", userDataRoutes);

// News Feed Routes
router.use("/news-feed", newsFeed);


module.exports = router;
