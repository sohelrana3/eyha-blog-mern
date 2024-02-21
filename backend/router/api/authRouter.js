const express = require("express");
const _ = express.Router();
const multer = require("multer");
const uploadFloder = "./uploads";
const registration = require("../../controllers/registrationControllers");
const loginController = require("../../controllers/loginController");
const {
    postCteate,
    getPost,
    fileupload,
    getImg,
    idPost
} = require("../../controllers/postController");

const upload = multer({
    dest: uploadFloder,
});

_.post("/registration", registration);
_.post("/login", loginController);
_.post("/createpost", postCteate);
_.get("/getpost", getPost);
_.post("/idpost", idPost);
_.get("/getimg", getImg);
_.post("/upload", upload.single(""), fileupload);

module.exports = _;
