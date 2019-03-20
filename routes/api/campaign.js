const router = require('express').Router();
const campaignController = require('../../controllers/campaignControllers');

// A route for getting and posting campaigns
router.route('/campaign')
  .get(campaignController.getCampaign)
  .post(campaignController.createCampaign);

module.exports = router;