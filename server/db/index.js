var path = require('path');
var db = module.exports = {
  database: require(path.join(__dirname, 'db')),
  things: require(path.join(__dirname, 'things'))
};
