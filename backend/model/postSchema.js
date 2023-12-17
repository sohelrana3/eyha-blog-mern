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
        type: Object,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        require: true,
    },
    tags: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model("Post", postSchema);
