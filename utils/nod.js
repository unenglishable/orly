var db = require('../assets/js/db');

var thingData = { name: process.argv[2] };

db.things.nod(thingData)
.then(console.log)
.then(function() {
  return db.database.disconnect();
});
