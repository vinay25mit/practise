
var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://0.0.0.0:27017/e-comm";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
