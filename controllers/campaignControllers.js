const db = require('../models');

module.exports = {
  // Create a campaign. The callbacks allow the responses to be passed almost unchanged up the chain to make it easier on frontend
  createCampaign: (req, res) => {
    db.Campaign
      .create(req.body)
      .then(dbCampaign => {
        return db.User.findOneAndUpdate({ _id: req.body.userId }, {$push : { campaigns: dbCampaign._id } }, { new: true });
      })
      .then(dbCampaign => {
        res.json(dbCampaign);
      })
      .catch(err => res.json(err));
  },
  // Get all the campaigns in a database
  getCampaign: (req, res) => {
    // We could use req to allow for focused searches for particular campaigns later on. Or, we could build another get function
    const { id } = req.query;
    if(id !== undefined) {
      db.Campaign
        .find({ _id: id })
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
          activeVoteCampaignIds.push(vote.campaign[0])
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
  // Create a discussion
  // createDiscussion: (req, res) => {
  //   const { id, subject, author, body } = req.body
  //   console.log(id);
  //   db.Campaign
  //     .find({})
  //     .populate("vote")
  //     .then(dbCampaign => res.json(dbCampaign))
  //     .catch(err => res.json(err));
  // },
  // update campign
  updateCampaign: (req, res) => {
    db.Campaign
    .findByIdAndUpdate(req.params.id,req.body)
    .then(dbCampaign => res.json(dbCampaign))
    .catch(err => res.json(err));
  },
  // Create a discussion
  createDiscussion: (req, res) => {
    console.log(req.body)
    db.Campaign
      .findOneAndUpdate({ _id: req.params.id }, { $push: { comments: req.body } })
      .then(dbDiscussion => res.json(dbDiscussion))
      .catch(err => {res.json(err)})
  },
  // Get the discussions
  // getDiscusison: (req, res) => {
  //   db.Discussion
  //     .find({})
  //     .then(dbDiscussion => res.json(dbDiscussion))
  //     .catch(err => {res.json(err)})
  //     .updateOne(
  //       { _id: id },
  //       { $push: 
  //         { comments:
  //           { 
  //           subject: subject,
  //           author: author,
  //           body: body
  //           }
  //         }
  //       }
  //     )
  //     .then(dbCampaign => res.json(dbCampaign))
  //     .catch(err => res.json(err));
  // }
};