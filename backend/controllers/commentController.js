const Comment = require("../model/comment");

const createComment = async (req, res) => {
    const { user, post, desc, replyOnUser } = req.body;

    const newcomment = new Comment({
        user: user,
        desc: desc,
        post: post,
        replyOnUser,
    });

    newcomment.save();

    res.send({success: "comment successfull"});
};
module.exports = { createComment };
