const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "Bitly";
const collection = "shortURL";
const client = new MongoClient(url);

const dbConnection = async () => {
  let result = await client.connect();
  let db = await result.db(database);
  return (collection = db.collection(collection));
  console.log(result);
};
module.exports = dbConnection;
