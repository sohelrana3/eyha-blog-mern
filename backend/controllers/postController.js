const Post = require("../model/postSchema");

const postCteate = async (req, res) => {
    try {
        const createPost = new Post(req.body);
        createPost.save();
        res.send(c)
    } catch (err) {
        res.send(err);
    }
};

module.exports = postCteate;
