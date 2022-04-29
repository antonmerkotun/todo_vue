import {MongoClient} from "mongodb";
import config from "config";

const Router = require('express');
const {ObjectId} = require("mongodb");
const router = new Router();
const client = new MongoClient(config.get('dbURL'));
const todosCollections = client.db("data").collection("todos");

client.connect();

router.delete('/todo/:id', async (req, res) => {
    try {
        const id = req.params.id
        await todosCollections.deleteOne({_id: ObjectId(id)});
        res.sendStatus(200);
    } catch (error) {
        console.log(error)
        res.send({message: 'Server errors'})
    }
});

module.exports = router;
