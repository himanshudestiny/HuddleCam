const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: String,
    email: String,
    dob: String,
    role: String,
    location: String,
    password: String,
    cpassword: String
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
    UserModel
}