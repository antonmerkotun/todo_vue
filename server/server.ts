import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3005;
app.use(bodyParser.json());
app.use(express.json());

const createTodo = require("./routes/createTodo");
const removeTodo = require("./routes/removeTodo");
const allTodo = require("./routes/allTodo");
const editCompletedTodo = require("./routes/editCompletedTodo");
const editContentTodo = require("./routes/editContentTodo");

app.use(createTodo);
app.use(removeTodo);
app.use(allTodo);
app.use(editCompletedTodo);
app.use(editContentTodo);

app.use(express.static(path.join('client','dist')));
app.get('/', function (req, res) {
    res.sendFile(path.join('client', 'dist', 'index.html'))
})

const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://antonmerkotun:1996178dD@data.2j7wv.mongodb.net/data?retryWrites=true&w=majority");
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (err) {
        console.error(err);
    }
};

start();