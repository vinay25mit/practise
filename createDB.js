// var mysql = require('mysql');//import mysql module for db connection
// const mongo = require('mongodb');
//specific to your project DB
// const redis=require("redis");
// var con = mysql.createConnection({
//   host: "localhost",//your project hostname to which your system has access
//   user: "yourusername",//username to connect with the db
//   password: "yourpassword"//password to connect to DB
// });


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/e-comm";
// const url = "mongodb://0.0.0.0:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

// var con1 = mongo.createConnection({
//     host: "mongodb://localhost:27017/e-comm",//your project hostname to which your system has access
//     user: "admin",//username to connect with the db
//     password: "123"//password to connect to DB
//   });

// //connects with the above mentioned DB details
// con1.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con1.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });
// con2.connect(function(err)
// {
//   if(err) throw err;
//   console.log("connected");
//   con2.query("SET employee",function(err,result)
//   {
//     if(err) throw err;
//     console.log("key connected");
//   })
// })
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/e-comm";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });