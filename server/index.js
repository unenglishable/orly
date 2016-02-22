require('dotenv').config({silent: true});
var path = require('path');
var express = require('express');
var browserify = require('browserify-middleware');
var lessMiddleware = require('less-middleware');
var app = express();
var clientDir = path.join(__dirname, '..', 'client');
var api = require('./api');

var mongoose = require('mongoose');
var mongooseBird = require('mongoose-bird')(mongoose);
var mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/myproject';
mongoose.connect(mongoUrl);

app.set('port', process.env.PORT || 8080);
app.use(express.static(clientDir));
app.use(lessMiddleware(clientDir, {
  parser: {
    paths: [path.join(__dirname, '..')]
  }
}));
app.use('/api', api);
app.get('/app.js', browserify(path.join(clientDir, 'js', 'app.js'), {}));
app.get('*', function (req, res) {
  res.sendFile(path.join(clientDir, 'index.html'));
});

app.listen(app.get('port'));

module.exports = app;
