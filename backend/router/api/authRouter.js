const express = require("express");
const _ = express.Router();
const registration = require("../../controllers/registrationControllers");

_.post("/registration", registration);

module.exports = _;
