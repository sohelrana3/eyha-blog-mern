const express = require("express");
const _ = express.Router();
const authRouters = require("./authRouter")

_.use("/auth", authRouters);
module.exports = _;
