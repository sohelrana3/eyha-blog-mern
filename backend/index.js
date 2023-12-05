require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./confiq/dbConfiq");
const router = require("./router");

app.use(cors());
app.use(express.json());
dbConnection();
app.use(router);

app.listen(8000, function () {
    console.log("Server Is Running");
});
