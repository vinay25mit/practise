var express=require("express");


var app=express();
// it is the module 
//  with function or objects or variables
// App is a placeholder to recieve output from express which we can use it in our code by accessing methods
// express is minimak and flexinly web applucation 
// in buit functu=iobs
app.get("/",function(req,res)
{
    res.send("hi i am express");
})
var server =app.listen(8000,function()
{   var host=server.address().address;
    console.log(host);
    console.log(server.address().port);
})