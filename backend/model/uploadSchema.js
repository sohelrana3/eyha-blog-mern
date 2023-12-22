const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
    },
  
    filepath: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model("Postimg", uploadSchema);