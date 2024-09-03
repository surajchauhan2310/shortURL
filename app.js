require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./shortURLRoutes");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URL); //mongoose connection

app.use(router);
//PORT listening
app.listen(PORT);
console.log("app listening at", PORT);
