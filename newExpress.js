var express =require("express");
var app=express();

app.get("/",function(r1,r2){
    r2.send("hello express");
})
app.listen(8000);

// app.listen(port, [host], [backlog], [callback]])
// what is host in listen function

// host is the namme of domain
// we need to set it when we deploy your apps to cloud
// backlog
// baclog is the maximum number of queue ending connections
// by default 5011 connection at a time
// call back
// we will be allow to write acallback function after listening to a port on which the request has been send
//https://xd.adobe.com/ideas/principles/web-design/design-documentation/