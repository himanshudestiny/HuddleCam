const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    name: String,
    title: String,
    description: String,
    userID: String
});

const TodoModel = mongoose.model("todo", todoSchema);

module.exports = {
    TodoModel
}