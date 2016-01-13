var Promise = require('bluebird');
var MongoClient = require('mongodb').MongoClient
var assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server
return new Promise(function(fulfill, reject) {
  MongoClient.connect(url, function(err, db) {
    if (err) { reject(err) }
    else {
      console.log("Connected correctly to server");

      db.close();
      fulfill();
    }
  });
});
