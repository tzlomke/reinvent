const db = require('../models');

module.exports = {
  // Create a campaign. The callbacks allow the responses to be passed almost unchanged up the chain to make it easier on frontend
  createCampaign: (req, res) => {
    console.log(req.body)
    db.Campaign
      .create(req.body)
      .then(dbCampaign => {
        db.User.findOneAndUpdate({ _id: id }, {$push : { campaigns: dbCampaign._id } }, { new: true });
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
        .then(dbCampaign => res.json(dbCampaign))
        .catch(err => res.json(err));
    };
  },
  // Create a discussion
  createDiscussion: (req, res) => {
    const { id, subject, author, body } = req.body
    console.log(id);
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
      .updateOne(
        { _id: id },
        { $push: 
          { comments:
            { 
            subject: subject,
            author: author,
            body: body
            }
          }
        }
      )
      .then(dbCampaign => res.json(dbCampaign))
      .catch(err => res.json(err));
  }
};