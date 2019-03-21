const router = require('express').Router();
const campaignController = require('../../controllers/campaignControllers');

// A route for getting and posting campaigns
router.route('/')
  .get(campaignController.getDiscussion)
  .post(campaignController.createDiscussion);

module.exports = router;