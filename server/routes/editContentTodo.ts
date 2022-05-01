import { MongoClient } from "mongodb";
import config from "config";

const Router = require('express');
const {ObjectId} = require("mongodb");
const router = new Router();
const client = new MongoClient(config.get('dbURL'));
const todosCollections = client.db("data").collection("todos");

client.connect();

router.patch('/todo/content/:id', async (req, res) => {
    try {
        const id:number = req.params.id;
        const {content} = req.body;
        await todosCollections.updateOne({_id: ObjectId(id)}, {
            $set: {content},
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.send({message: 'Server errors'});
    }
});

module.exports = router;