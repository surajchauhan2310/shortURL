const express = require("express");
const mongoose = require("mongoose");
const router = require("./shortURLRoutes");

const app = express();
app.use(express.json());
const PORT = 4600;

mongoose.connect("mongodb://localhost:27017/Bitly"); //mongoose connection

app.use(router);
//PORT listening
app.listen(PORT);
console.log("app listening at", PORT);
