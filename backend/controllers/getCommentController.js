const Comment = require("../model/comment");

const getComment = async (req, res) => {

    try {
        let data = await Comment.find({}).populate("user");
        res.send(data);
    } catch (error) {
        console.log(error);
    }
};

module.exports = getComment;
