const { number } = require("mathjs");
const { Collection } = require("mongodb");
const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://127.0.0.1:27017/inventory")
//   .then((db) => console.log("connected to db "))
//   .catch((err) => console.log("not connected"));


//   const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
      id:{
            type:String,
            required: true
      },
      product:{
            type:String,
            required: true
      },
      manufacture:{
            type:String,
            required:true
      },
      price:{
            type:number
      }
});
const User = new mongoose.model("orders", userSchema);
function run() {
  
     mongoose.connect("mongodb://127.0.0.1:27017/inventory");
    console.log("connected to db");
    const docs =  User.findOne({});
    console.log(docs.amount)
    // await docs.forEach((doc) => console.log(doc));
  }  

run();