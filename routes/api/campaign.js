const router = require('express').Router();
const campaignController = require('../../controllers/campaignControllers');

// A route for getting and posting campaigns
router.route('/')
  .get(campaignController.getCampaign)
  .post(campaignController.createCampaign);

  // A route for posting campaigns
router.route('/discussion')
  .post(campaignController.createDiscussion);
  
module.exports = router;