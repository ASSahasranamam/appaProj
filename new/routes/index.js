var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:root@connectplacecluster.0gdr9.gcp.mongodb.net/testing123?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var database;

client.connect(err => {
  const collection = client.db("testing123").collections("runningNumbers");
  database = client.db();
  console.log("Database connection done.");

});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', function(req, res, next) {
  database.collection("runningNumber").find().toArray(function (error, data) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(data);
    res.send(data)

  });
});

router.post('/getMatchingAnswer', function(req, res, next) {
  console.log("Print Request.body", req.body["number"])

  res.setHeader("Access-Control-Allow-Origin", "*");
  database.collection("answer").findOne({"idKey":req.body.number}, function(err, doc){
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (err) throw err;
    console.log(doc)
    res.send(doc)

  })


});

module.exports = router;
