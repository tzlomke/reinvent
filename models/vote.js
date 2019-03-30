const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voteSchema = new Schema({
    title: String,
    creator: String,
    voters: [String],
    closed: Boolean,
    downvote: Boolean,
    expansion: Boolean,
    items: [],
    multiple: false,
    showTotal: Boolean,
    // ref campaign related to vote
    campaign:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Campaign'
        }
    ]
});

const Vote = mongoose.model("Vote", voteSchema);

module.exports = Vote;