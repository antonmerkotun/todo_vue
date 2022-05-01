import mongoose from "mongoose";
import {Schema} from "mongoose"

const todoSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    content: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;