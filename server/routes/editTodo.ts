import {MongoClient} from "mongodb";
import config from "config"

const Router = require('express')
const {ObjectId} = require("mongodb")
const router = new Router()
const client = new MongoClient(config.get('dbURL'));
const todosCollections = client.db("data").collection("todos")

client.connect()

router.patch('/todo/done/:id', async (req, res) => {
    try {
        const id = req.params.id
        const {completed} = await todosCollections.findOne({_id: ObjectId(id)});
        await todosCollections.updateOne({_id: ObjectId(id)}, {
           $set: {completed: !completed}
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error)
        res.send({message: 'Server errors'})
    }
})

module.exports = router