const express = require("express");
const { connection } = require("./configs/db");
const { userRouter } = require("./routes/User.route");
const { todoRouter } = require("./routes/Todo.route");
const { authenticate } = require("./middlewares/authenticate.middleware");
require('dotenv').config()
const cors = require("cors");

const app = express();

app.use(cors({
    origin:"*"
}))

app.use(express.json());


app.use("/users", userRouter);
app.use(authenticate);
app.use("/todos", todoRouter);

app.get("/", (req, res) => {
    res.send("Welcome");
})


app.listen(process.env.port, async () => {
    try {
       await connection;
       console.log(`Server is running on port ${process.env.port}`);
    }
    catch (err) {
          console.log(err);
          console.log("Some error occured while connecting to the server");
    }
    
})