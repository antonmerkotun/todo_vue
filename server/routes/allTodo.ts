import { MongoClient } from "mongodb";

const Router = require('express');
const router = new Router();
const client = new MongoClient("mongodb+srv://antonmerkotun:1996178dD@data.2j7wv.mongodb.net/data?retryWrites=true&w=majority");
const todosCollections = client.db("data").collection("todos");

client.connect();

router.get('/todos', async function (req, res) {
    try {
        const allTodos:any = await todosCollections.find({}).toArray();
        res.send(allTodos);
    } catch (error) {
        console.log(error);
        res.send({message: 'Server errors'});
    }
});

module.exports = router;