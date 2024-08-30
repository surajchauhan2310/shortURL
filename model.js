const mongoose = require("mongoose");

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

module.exports = urlModel;
