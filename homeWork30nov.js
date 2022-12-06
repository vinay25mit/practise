const { number } = require("mathjs");
const { Collection } = require("mongodb");
const mongoose = require("mongoose");

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
async function run() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/inventory");
    console.log("connected to db");
    const docs = await User.find({});

      const dok = await User.findOne({});
      console.log(dok.qty);
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
}
run();