var db = require('../db');

db.things.all()
.then(console.log)
.then(function() {
  return db.database.disconnect();
});
