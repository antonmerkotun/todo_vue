"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var mongoose_2 = require("mongoose");
var todoSchema = new mongoose_2.Schema({
    _id: mongoose_1["default"].Schema.Types.ObjectId,
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean
    }
});
var Todo = mongoose_1["default"].model('Todo', todoSchema);
module.exports = Todo;
