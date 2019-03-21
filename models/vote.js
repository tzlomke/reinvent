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
});

const Vote = mongoose.model("Vote", voteSchema);

module.exports = Vote;