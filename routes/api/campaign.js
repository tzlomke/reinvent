const router = require('express').Router();
const campaignController = require('../../controllers/campaignControllers');

// A route for getting and posting campaigns
router.route('/')
  .get(campaignController.getCampaign)
  .post(campaignController.createCampaign)
  .put(campaignController.updateCampaign);

router
  .route("/:id")
  .put(campaignController.updateCampaign)
  .delete(campaignController.deleteCampaign)

router.route("/active")
  .get(campaignController.getActiveCampaigns);

router.route("/closed")
  .get(campaignController.getClosedCampaigns);

router.route("/trending")
  .get(campaignController.getTrendingCampaigns);

  // A route for posting campaigns
router.route('/discussion/:id')
  .put(campaignController.createDiscussion);
  
module.exports = router;