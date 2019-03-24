const router = require("express").Router();
const campaignRoutes = require("./campaign");
const voteRoutes = require("./vote");
const userAuthRoutes = require("./userAuthentication");

// Campaign routes
router.use("/campaign", campaignRoutes);

<<<<<<< HEAD
=======
// Discussion routes
// router.use("/discussion", discussionRoutes);

>>>>>>> userProfile
// vote routes
router.use("/vote", voteRoutes);

router.use("/userAuthentication", userAuthRoutes);

module.exports = router;
