const express = require("express");
const _ = express.Router();
const registration = require("../../controllers/registrationControllers");
const loginController = require("../../controllers/loginController");

_.post("/registration", registration);
_.post("/login", loginController);

module.exports = _;
