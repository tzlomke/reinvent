const router = require("express").Router();
const campaignRoutes = require("./campaign");

// Campaign routes
router.use("/campaign", campaignRoutes);

// Discussion routes
router.use("/discussion", discussionRoutes);

module.exports = router;
