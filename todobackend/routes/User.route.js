const express = require("express");
const { UserModel } = require("../models/User.model");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");


userRouter.use(express.json());

userRouter.post("/register", async (req, res) => {
    const { userName, email, dob, role, location, password, cpassword } = req.body;
    try {
        const find_user = await UserModel.find({ email });
        if(find_user.length>0) {
            // res.send("You are already registered, please login");
             res.send(find_user);
        } else {
            bcrypt.hash(password, 5, async (err, hashed_password) => {
                if(err) {
                    console.log(err);
                } else {
                    const user = new UserModel({ userName, email, dob, role, location, password: hashed_password, cpassword: hashed_password });
                    await user.save();
                    res.send([])
                }
            });
        }
       
         
    }
    catch (err) {
        console.log("Something went wrong");
        console.log(err);
    }
})

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.find({ email });
        if(user.length>0) {
            bcrypt.compare(password, user[0].password, (err, result) => {
                if(result) {
                    const token = jwt.sign({ userID: user[0]._id }, 'himanshu');
                    res.send( [ {"message": "Login successful!", "token": token, "userName": user[0].userName, "id": user[0]._id } ] );
                } else {
                    res.send([]);
                }
            });
        } else {
            res.send([]);
        }
        
    }
    catch (err) {
        console.log("Something went wrong");
        console.log(err);
    }
})

module.exports = {
    userRouter
}