const Post = require("../model/postSchema");
const Postimg = require("../model/uploadSchema");

const postCteate = async (req, res) => {
    try {
        const { title, categories, description, photo, postAdmin, tags, date } =
            req.body;
        const createPost = new Post({
            title,
            categories,
            description,
            photo,
            postAdmin,
            tags,
            date,
        });
        const post = await createPost.save();
        res.send(post);
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

const fileupload = async (req, res) => {
    const postimg = new Postimg({
        filename: req.file.filename,
        filepath: req.file.path,
    });
    const img = await postimg.save();
    res.send(img);
};

module.exports = { postCteate, getPost, fileupload };
