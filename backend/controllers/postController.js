const Post = require("../model/postSchema");
const Postimg = require("../model/uploadSchema");
const formidable = require("formidable");

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
        res.send("Post create sucessfull");
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

// product q

const idPost = async (req, res) => {
    const { id } = req.body;

    const product = await Post.findById({ _id: id });

  
    res.send(product);
};

const fileupload = async (req, res) => {
    const form = formidable();
    form.parse(req, (err, fields, files) => {
        console.log(files);
    });
    // const postimg = new Postimg({
    //     filename: req.file.filename,
    //     filepath: req.file.path,
    // });
    // const img = await postimg.save();
    // res.send(img);
};

const getImg = async (req, res) => {
    const getImg = await Postimg.find();
    res.send(getImg);
};

module.exports = { postCteate, getPost, fileupload, getImg, idPost };
