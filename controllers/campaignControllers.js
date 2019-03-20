const db = require('../models');

module.exports = {
  // Create a campaign. The callbacks allow the responses to be passed almost unchanged up the chain to make it easier on frontend
  createCampaign: (req, cb) => {
    db.Campaign
      .create(req)
      .then(dbCampaign => cb(dbCampaign))
      .catch(err => cb(err))
  },
  // Get all the campaigns in a database
  getCampaign: (req, cb) => {
    // We could use req to allow for focused searches for particular campaigns later on. Or, we could build another get function
    // console.log(req);
    db.Campaign
      .find({})
      .then(dbCampaign => cb(dbCampaign))
      .catch(err => cb(err))
  }
};