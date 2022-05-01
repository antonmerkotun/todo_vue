import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import config from "config"

const app = express();
const PORT = config.get('serverPORT')
app.use(bodyParser.json());
app.use(express.json());

const createTodo = require("./routes/createTodo")
const removeTodo = require("./routes/removeTodo")
const allTodo = require("./routes/allTodo")
const completedTodo = require("./routes/completedTodo")

app.use(createTodo)
app.use(removeTodo)
app.use(allTodo)
app.use(completedTodo)

const start = async () => {
    try {
        await mongoose.connect(config.get("dbURL"));

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (err) {
        console.error(err)
    }
}

start();