function passwordValidation(password) {
    let patten =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return patten.test(password);
}
module.exports = passwordValidation;
