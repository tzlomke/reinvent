const db = require('../models');

module.exports = {
  // Create a campaign. The callbacks allow the responses to be passed almost unchanged up the chain to make it easier on frontend
  createCampaign: (req, res) => {
    db.Campaign
      .create(req.body)
      .then(dbCampaign => res.json(dbCampaign))
      .catch(err => res.json(err))
  },
  // Get all the campaigns in a database
  getCampaign: (req, res) => {
    // We could use req to allow for focused searches for particular campaigns later on. Or, we could build another get function
    // console.log(req);
    db.Campaign
      .find({})
      .populate("vote")
      .then(dbCampaign => res.json(dbCampaign))
      .catch(err => res.json(err));
  },
  updateCampaign: (req, res) => {
    db.Campaign
    .findByIdAndUpdate(req.params.id,req.body)
    .then(dbCampaign => res.json(dbCampaign))
    .catch(err => res.json(err));
  },
  // Create a discussion
  createDiscusison: (req, res) => {
    db.Discussion
      .create(req.body)
      .then(dbDiscussion => res.json(dbDiscussion))
      .catch(err => {res.json(err)})
  },
  // Get the discussions
  getDiscusison: (req, res) => {
    db.Discussion
      .find({})
      .then(dbDiscussion => res.json(dbDiscussion))
      .catch(err => {res.json(err)})
  }
};