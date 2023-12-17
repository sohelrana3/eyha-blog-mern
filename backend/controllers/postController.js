const Post = require("../model/postSchema");

const postCteate = async (req, res) => {
    try {
        const createPost = new Post(req.body);
        createPost.save();
        res.send(createPost);
    } catch (err) {
        res.send(err);
    }
};
const getPost = async (req, res) => {
    try {
        const getpost = await Post.find();
        res.send(getpost);
    } catch (err) {
        res.send(err);
    }
};

module.exports = { postCteate , getPost};
