const db = require('../models');

module.exports = {
  // Create a campaign. The callbacks allow the responses to be passed almost unchanged up the chain to make it easier on frontend
  createCampaign: (req, res) => {
    db.Campaign
      .create(req.body)
      .then(dbCampaign => {
        res.json(dbCampaign._id)
        return db.User.findOneAndUpdate({ _id: req.body.userId }, {$push : { campaigns: dbCampaign._id } }, { new: true });
      })
      .then(dbCampaign => {
        res.json(dbCampaign);
      })
      .catch(err => res.json(err));
  },
  // Get all the campaigns in a database
  getCampaign: (req, res) => {
    // req.query allows for focused searches if parameter is provided
    const { id } = req.query;
    if(id !== undefined) {
      db.Campaign
        .find({ _id: id })
        .populate("vote")
        .then(dbCampaign => res.json(dbCampaign))
        .catch(err => res.json(err));
    } else {
      db.Campaign
        .find({})
        .populate("vote")
        .then(dbCampaign => res.json(dbCampaign))
        .catch(err => res.json(err));
    };
  },
  // get active and unopened vote campaigns from database
  getActiveCampaigns: (req, res) => {
    db.Vote
      .find({closed: false})
      .then(dbCampaign => {
        const activeVoteCampaignIds = [];
        dbCampaign.forEach(vote => {
          activeVoteCampaignIds.push(vote.campaign[0]);
        });
        db.Campaign
          .find({$or:[{_id: {$in: activeVoteCampaignIds}}, {vote:[]}]})
          .populate("vote")
          .sort({date: -1})
          .then(dbCampaign => res.json(dbCampaign))
          .catch(err => res.json(err));
      })
      .catch(err => res.json(err));
  },
  // get closed vote campaigns
  getClosedCampaigns: (req, res) => {
    db.Vote
      .find({closed: true})
      .then(dbCampaign => {
        const closedVoteCampaignIds = [];
        dbCampaign.forEach(vote => {
          closedVoteCampaignIds.push(vote.campaign[0])
        });
        db.Campaign
          .find({_id: {$in: closedVoteCampaignIds}})
          .populate("vote")
          .sort({date: -1})
          .then(dbCampaign => res.json(dbCampaign))
          .catch(err => res.json(err));
      })
      .catch(err => res.json(err));
  },
  getTrendingCampaigns: (req, res) => {
    db.Campaign
      .find({})
      .populate("vote")
      .then(dbCampaign => {
        let trendingCampaigns=[];
        dbCampaign.forEach(campaign => {
          if (campaign.comments.length >= 2 || campaign.vote.length >= 3) {
            trendingCampaigns.push(campaign)
          }
        });
        console.log(trendingCampaigns)
        res.json(trendingCampaigns);
      })
      .catch(err => res.json(err));
  },
  updateCampaign: (req, res) => {
    db.Campaign
    .findByIdAndUpdate(req.params.id,req.body)
    .then(dbCampaign => res.json(dbCampaign))
    .catch(err => res.json(err));
  },
  // delete campaign
  deleteCampaign: function (req, res) {
    db.Campaign
        .findById({
            _id: req.params.id
        })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  // Create a discussion
  createDiscussion: (req, res) => {
    db.Campaign
      // When utilizing findOneAndUpdate, you must explicitly tell it to runValidators as an option
      .findOneAndUpdate({ _id: req.params.id }, { $push: { comments: req.body } }, { runValidators: true })
      .then(dbDiscussion => res.json(dbDiscussion))
      .catch(err => {res.json(err)})
  },
};