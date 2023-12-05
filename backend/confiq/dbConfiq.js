const mongoose = require("mongoose");
function dbConnection() {
    mongoose
        .connect(process.env.DB_URI)
        .then(() => console.log("Database Connected!"));
}
module.exports = dbConnection;
