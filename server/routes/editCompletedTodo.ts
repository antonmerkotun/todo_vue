import { MongoClient } from "mongodb";

const Router = require('express');
const { ObjectId } = require("mongodb");
const router = new Router();
const client = new MongoClient("mongodb+srv://antonmerkotun:1996178dD@data.2j7wv.mongodb.net/data?retryWrites=true&w=majority");
const todosCollections = client.db("data").collection("todos");

client.connect();

router.patch('/todo/done/:id', async (req, res) => {
    try {
        const id:number = req.params.id;
        const {completed} = await todosCollections.findOne({_id: ObjectId(id)});
        await todosCollections.updateOne({_id: ObjectId(id)}, {
           $set: {completed: !completed},
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.send({message: 'Server errors'});
    }
});

module.exports = router;