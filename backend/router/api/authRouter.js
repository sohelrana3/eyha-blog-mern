const express = require("express");
const _ = express.Router();
const registration = require("../../controllers/registrationControllers");
const loginController = require("../../controllers/loginController");
const postCteate = require("../../controllers/postController");

_.post("/registration", registration);
_.post("/login", loginController);
_.post("/createpost", postCteate);

module.exports = _;
