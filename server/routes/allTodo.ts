import {MongoClient} from "mongodb";
import config from "config";

const Router = require('express');
const router = new Router();
const client = new MongoClient(config.get('dbURL'));
const todosCollections = client.db("data").collection("todos");

client.connect();

router.get('/todos', async function (req, res) {
    try {
        const allTodos = await todosCollections.find({}).toArray();
        res.send(allTodos);
    } catch (error) {
        console.log(error)
        res.send({message: 'Server errors'})
    }
});

module.exports = router;