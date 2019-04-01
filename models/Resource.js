const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    // category: {
    //     type: String,
    //     default: "Miscellaneous"
    // },
});

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;