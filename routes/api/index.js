const router = require("express").Router();
const campaignRoutes = require("./campaign");

// Book routes
router.use("/campaign", campaignRoutes);

module.exports = router;
