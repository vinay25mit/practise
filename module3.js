const express=require("express");
require("./module1");
const User=require("./module2")
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/users",async(req,resp)=>{
    let products=await User.find();
    
    if(products.length>0){
        resp.send(products)
    }
    else{
        resp.send({result: "NO product foun"})
    }
})
app.listen(8000);