var db = require('../db');

var thingData = { name: process.argv[2] };

db.things.downdoot(thingData)
.then(console.log)
.then(function() {
  return db.database.disconnect();
});