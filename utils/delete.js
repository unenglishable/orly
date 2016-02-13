var db = require('../assets/js/db');

var thingData = { name: process.argv[2] };

db.things.find(thingData)
.then(console.log)
.then(function() {
  return db.things.delete(thingData);
})
.then(function(deletedThing) {
  console.log('deleted:', deletedThing);
})
.then(function() {
  return db.database.disconnect();
});
