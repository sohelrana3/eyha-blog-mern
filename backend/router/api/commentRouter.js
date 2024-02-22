const express = require("express");
const _ = express.Router();

const { createComment } = require("../../controllers/commentController");

_.post("/create", createComment);

module.exports = _;
