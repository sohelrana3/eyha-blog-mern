const express = require("express");
const _ = express.Router();
const upload = require("../../helpers/multer");
const registration = require("../../controllers/registrationControllers");
const loginController = require("../../controllers/loginController");
const {
    postCteate,
    getPost,
    fileupload,
} = require("../../controllers/postController");

_.post("/registration", registration);
_.post("/login", loginController);
_.post("/createpost", postCteate);
_.get("/getpost", getPost);
_.post("/upload", upload.single("images"), fileupload);

module.exports = _;
