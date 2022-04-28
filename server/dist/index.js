"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var config_1 = __importDefault(require("config"));
var MongoClient = require('mongodb').MongoClient;
var app = (0, express_1["default"])();
var PORT = config_1["default"].get('serverPORT');
var client = new MongoClient(config_1["default"].get("dbURL"));
var addTodo = require("./routes/addTodo");
app.use(body_parser_1["default"].json());
app.use(express_1["default"].json());
// app.use(addTodo)
// const start = async () => {
//     try {
//         await client.connect()
//
//         app.listen(PORT, () => {
//             console.log(`Server started on port ${PORT}`);
//         });
//     } catch (err) {
//         console.error(err)
//     }
// }
//
// start();
client.connect(function (err) {
    app.use(addTodo);
    app.listen(PORT, function () {
        console.log("Connected server to port ".concat(PORT));
    });
});
