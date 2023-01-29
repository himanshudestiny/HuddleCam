const express = require("express");
const { TodoModel } = require("../models/Todo.model");
const todoRouter = express.Router();


todoRouter.use(express.json());

todoRouter.get("/:id", async (req, res) => {
     const ID = req.params.id;
     try {
        const todo = await TodoModel.find( { userID: ID} );
        res.send(todo);
     }
     catch (err) {
       console.log("Something went wrong");
       console.log(err);
     }
})

todoRouter.post("/add", async (req, res) => {
    const payload = req.body;
    try {
       const new_todo = new TodoModel(payload);
       await new_todo.save();
       res.send("Todo added successfully");
    }
    catch (err) {
        console.log("Something went wrong");
        console.log(err);
    }
})

todoRouter.patch("/update/:id", async (req, res) => {
    const payload = req.body;
    const ID = req.params.id;
    const todo = await TodoModel.findOne({_id: ID});
    const user_in_database = todo.userID;
    const user_requesting = req.body.userID;
    try {
        if(user_in_database !== user_requesting) {
            res.send("You are not authorized");
        } else {
            const updated_todo = await TodoModel.findByIdAndUpdate({ _id: ID}, payload);
            console.log(updated_todo);
            res.send("Todo updated successfully");
        }
       
    }
    catch (err) {
        console.log("Something went wrong");
        console.log(err);
    }
})

todoRouter.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id;
    const todo = await TodoModel.findOne({_id: ID});
    console.log(todo);
    const user_in_database = todo.userID;
    const user_requesting = req.body.userID;
    try {
        if(user_in_database !== user_requesting) {
            res.send([]);
        } else {
            const deleted_todo = await TodoModel.findByIdAndDelete({_id:ID});
            res.send([1]);
        }
       
    }
    catch (err) {
        console.log("Something went wrong");
        console.log(err);
    }
})


module.exports = {
    todoRouter
}