const { re } = require("mathjs");
const mongo=require("mongodb");
const url="mongodb://127.0.0.1:27017";
mongo.MongoClient.connect(url,function(err,db)
{
    if(err) throw err;
    var dbo=db.db("inventory");
    dbo.collection("orders").findOneAndUpdate({qty:2},{$inc:{qty:7}})
    dbo.collection("orders").findOne({},function(err,res)
    {
        if(err) throw err;
        console.log(res.qty);
        if(res.qty==2)
        {
            // db.orders.update({res:2},{$set:{qty:3}})
            // db.orders.update({"qty":2},{$set:{"qty":3}})
            // dbo.findOneAndUpdate(res=2, res=3);

        }

    })
    // console.log(dbo.collection("orders"))
})