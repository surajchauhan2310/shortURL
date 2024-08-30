const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const PORT = 4500;
const router = require("./shortURLRoutes");

mongoose.connect("mongodb://localhost:27017/Bitly"); //mongoose connection

app.use(router);
//PORT listening
app.listen(PORT);
console.log("app listening at", PORT);
