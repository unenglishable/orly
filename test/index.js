var Promise = require('bluebird');
var path = require('path');
var tests = {
  mongo: require(path.join(__dirname, 'mongo'))
};

var run = [tests.mongo];

Promise.all(run)
.then(function() {
  console.log('tests are done!');
});
