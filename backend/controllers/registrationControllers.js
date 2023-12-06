const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const emailValidation = require("../helpers/emailValidation");
const passwordValidation = require("../helpers/passwordValidation");
const registration = async (req, res) => {
    try {
        // req.body
        const { username, email, password } = req.body;
        const existingUser = await User.find({ email: email });
        // user validate
        if (existingUser.length == 0) {
            if (!username) {
                res.send({ error: "username Required!" });
            } else if (!email) {
                res.send({ error: "email Required!" });
            } else if (!password) {
                res.send({ error: "password Required!" });
            } else {
                // email validation
                if (email) {
                    if (!emailValidation(email)) {
                        return res.send({ error: "Valid Email Required!" });
                    }
                }
                // password validation
                if (password) {
                    if (!passwordValidation(password)) {
                        return res.send({
                            errror: "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:",
                        });
                    }
                }
                // bcrypt password
                bcrypt.hash(password, 10, function (err, hash) {
                    // Store hash in your password DB.
                    const user = new User({
                        username: username,
                        email: email,
                        password: hash,
                    });
                    user.save();
                    res.send({ success: "user create successfull" });
                });
            }
        } else {
            res.send({ error: "Email Already Exits" });
        }
    } catch (err) {
        res.send(err);
    }
};
module.exports = registration;
