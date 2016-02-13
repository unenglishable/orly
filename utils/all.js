var db = require('../assets/js/db');

db.things.all()
.then(console.log)
.then(function() {
  return db.database.disconnect();
});
