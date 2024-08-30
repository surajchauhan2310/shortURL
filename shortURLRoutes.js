const express = require("express");
const { generateRandomString } = require("./utils");
const urlModel = require("./model");
const router = express.Router();

const saveURL = async (fullURL, shortURL) => {
  let data = await urlModel.create({
    fullURL: fullURL,
    shortURL: shortURL,
  });
  return data;
};
//POST method
router.post("/", async (req, res) => {
  let code = generateRandomString(8);
  const result = await saveURL(req.body.fullURL, code);
  res.json(result);
  console.log(result);
});

//GET method
router.get("/:shortURL", async (req, res) => {
  const result = await urlModel.findOne({
    shortURL: req.params.shortURL,
  });
  if (result == null) return res.sendStatus(404);
  console.log("Result is ==>", result);
  return res.redirect(result.fullURL);
});

module.exports = router;
