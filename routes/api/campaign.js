const router = require('express').Router();
const campaignController = require('../../controllers/campaignControllers');

// A route for getting and posting campaigns
router.route('/')
  .get(campaignController.getCampaign)
  .post(campaignController.createCampaign)
  .put(campaignController.updateCampaign);

router
  .route("/:id")
  .put(campaignController.updateCampaign);

module.exports = router;