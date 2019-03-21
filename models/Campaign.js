const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },

  // Ref Votes related to the campaign
  vote: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Vote'
    }
  ]
});

const Campaign = mongoose.model("Campaign", campaignSchema);

module.exports = Campaign;
