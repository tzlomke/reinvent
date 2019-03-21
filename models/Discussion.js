const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discussionSchema = new Schema({
  subject: { type: String, required: true },
  author: { type: String, required: true },
  point: String,
  date: { type: Date, default: Date.now }
});

const Discussion = mongoose.model("Discussion", discussionSchema);

module.exports = Discussion;
