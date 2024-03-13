const mongoose = require("mongoose");
const { Schema } = mongoose;
const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      
    },
    desc: {
        type: String,
        required: true,
    },
    check: {
        type: Boolean,
        default: false,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        
    },
    replyOnUser: {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: null,
    },
});

module.exports = mongoose.model("Comment", commentSchema);
