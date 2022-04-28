import express from "express";
import bodyParser from "body-parser";
import config from "config";

const {MongoClient} = require('mongodb');
const app = express();
const PORT = config.get('serverPORT')
const client = new MongoClient(config.get("dbURL"));
const addTodo = require("./routes/addTodo")

app.use(bodyParser.json());
app.use(express.json());
app.use(addTodo)

const start = async () => {
    try {
        await client.connect()

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (err) {
        console.error(err)
    }
}

start();


