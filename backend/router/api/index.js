const express = require("express");
const _ = express.Router();
const authRouters = require("./authRouter");
const commentRouter = require("./commentRouter");

_.use("/auth", authRouters);
_.use("/comment", commentRouter);
module.exports = _;
