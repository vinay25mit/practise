
const mongo=require("mongodb");
const url="mongodb://127.0.0.1:27017";
exports.cdb=function(){
 mongo.MongoClient.connect(url,function(err,db)
{
    if(err) throw err;
    console.log("connected to db")
})
}();

