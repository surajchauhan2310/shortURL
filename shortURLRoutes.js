const express = require("express");
const app = express();
const router = express.Router();
const { generateRandomString, saveURL, urlModel } = require("./index");

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

module.exports = Router;
