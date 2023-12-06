const User = require("../model/userSchema");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.find({ email: email });

        if (existingUser.length == 0) {
            res.send({ error: "Credencial is not valid" });
        } else {
            // Load hash from your password DB.
            bcrypt.compare(
                password,
                existingUser[0].password,
                function (err, result) {
                    // result == true

                    if (result) {
                        const { password: pass, ...rest } =
                            existingUser[0]._doc;
                        res.send(rest);
                    } else {
                        res.send({ error: "Credencial is not valid" });
                    }
                }
            );
        }
    } catch (error) {
        res.send(error);
    }
};
module.exports = loginController;
