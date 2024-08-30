const express = require("express");
const app = express();
const mongoose = require("mongoose");
const shortId = require("shortid"); //Importing shortId
shortId.generate(); //Function for generating the short id
app.use(express.json());
const PORT = 4500;

//mongoose connection
mongoose.connect("mongodb://localhost:27017/Bitly");

//Creating the tiny URL's
const generateRandomString = (len) => {
  let result = "";
  for (let i = 0; i < len; i++) {
    // Generate a random character code for either uppercase (65-90) or lowercase (97-122)
    const randomCharCode =
      Math.random() < 0.5
        ? Math.floor(Math.random() * 26) + 65 // Uppercase letters A-Z
        : Math.floor(Math.random() * 26) + 97; // Lowercase letters a-z
    result += String.fromCharCode(randomCharCode);
  }
  return result;
};

// -----------------------------------

//Creating a Schema for the mongoDB
const shortURLSchema = new mongoose.Schema(
  {
    fullURL: {
      type: String,
      required: true,
    },
    shortURL: {
      type: String,
      required: true,
      //   default: shortId.generate,
    },
  },
  {
    collection: "shortURL",
  }
);


const urlModel = mongoose.model("shortURL", shortURLSchema);

const saveURL = async (fullURL, shortURL) => {
  let data = await urlModel.create({
    fullURL: fullURL,
    shortURL: shortURL,
  });
  return data;
};

//POST method
app.post("/", async (req, res) => {
  let code = generateRandomString(8);
  const result = await saveURL(req.body.fullURL, code);
  res.json(result);
  console.log(result);
});

//GET method
app.get("/:shortURL", async (req, res) => {
  const result = await urlModel.findOne({
    shortURL: req.params.shortURL,
  });
  if (result == null) return res.sendStatus(404);
  console.log("Result is ==>", result);
  return res.redirect(result.fullURL);
});
//PORT listening
app.listen(PORT);
console.log("app listening at", PORT);
