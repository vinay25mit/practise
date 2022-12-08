var express = require('express');
var app = express();

// app.get('/hello', function(req, res){
//    res.send("Hello World!");
// });
// app.listen(3000);
// app.post('/hello', function(req, res){
//     res.send("You just called the post method at '/hello'!\n");
//  });
// Homework...
// /users
// 1. Connect to mongo db
// 2. store it in a object
// 3. Send it from the app.get()

// 4. url='/user'
// users
// we should be able to view it in the browser
// exports

//module 1: utility : connect
// module2 :service: fetch the records from the colection
//modules 3.: export module 1,2 an dpass the value to the app.get
//app.method(path,handler)

app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
 });

 app.listen(3000);
