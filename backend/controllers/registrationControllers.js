const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const emailValidation = require("../helpers/emailValidation");
const passwordValidation = require("../helpers/passwordValidation");
const usernameValidation = require("../helpers/usernameValidation");
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
                // username validation
                if (username) {
                    if (!usernameValidation(username)) {
                        return res.send({ error: "Username Required!" });
                    }
                }
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
                            error: "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:",
                        });
                    }
                }
                // otp-ganarate
                let otp = otpGenerator.generate(6, {
                    upperCaseAlphabets: false,
                    specialChars: true,
                });
                // bcrypt password
                bcrypt.hash(password, 10, async function (err, hash) {
                    // Store hash in your password DB.
                    const user = new User({
                        username: username,
                        email: email,
                        password: hash,
                        otp: otp,
                    });
                    user.save();
                    // nodemilar
                    const transporter = nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                            user: "expartdesigns5@gmail.com",
                            // pass: "aolz berp jnou uhkb",
                            pass: "dasl wiso khze ranq",
                        },
                    });

                    // gmail send
                    const info = await transporter.sendMail({
                        from: "expartdesigns5@gmail.com",
                        to: email,
                        subject: "Verify your Email",
                        html: `<div style="display: flex;width: 600px;height: 200px;"> <div style="width: 50%;height: 100px;">Please Verify your email by click on this button <h2 style="color: red;">${otp}</h2></div></div>`,
                    });
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
