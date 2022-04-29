import mongoose from "mongoose";

const Router = require('express')
const Todo = require("../mongoose/models");
const router = new Router()

router.post('/add/todo', async (req, res) => {
    try {
        const {content} = req.body
        const todo = new Todo({
            _id: new mongoose.Types.ObjectId(),
            content,
            isDone: false
        })
        await todo.save()
        return res.json(todo)
    } catch (error) {
        console.log(error)
        res.sendStatus(400);
        res.send({message: 'Server errors'})
    }
});

module.exports = router;