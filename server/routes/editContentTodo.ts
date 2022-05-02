import { MongoClient } from "mongodb";

const Router = require('express');
const {ObjectId} = require("mongodb");
const router = new Router();
const client = new MongoClient("mongodb+srv://antonmerkotun:1996178dD@data.2j7wv.mongodb.net/data?retryWrites=true&w=majority");
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