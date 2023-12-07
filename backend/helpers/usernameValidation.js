function usernameValidation(username) {
    let patten = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    return patten.test(username);
}
module.exports = usernameValidation;
