const express = require("express");
const _ = express.Router();

const { createComment } = require("../../controllers/commentController");
const getComment = require("../../controllers/getCommentController")

_.get("/allcomment", getComment);
_.post("/create", createComment);

module.exports = _;
