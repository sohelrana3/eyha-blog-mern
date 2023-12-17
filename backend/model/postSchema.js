const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    categories: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    postAdmin: {
        type: String,
        require: true,
    },
    tags: {
        type: [String],
        required: false,
    },
    date: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Post", postSchema);
