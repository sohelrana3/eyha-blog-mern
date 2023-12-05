const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
    },
    verify: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ["admin", "sub-admin", "user"],
        default: "user",
    },
    avatar: {
        type: String,
        default:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
});

//Export the model
module.exports = mongoose.model("User", userSchema);
