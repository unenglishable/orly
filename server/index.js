require('dotenv').config({silent: true});
var path = require('path');
var express = require('express');
var browserify = require('browserify-middleware');
var app = express();
var clientDir = path.join(__dirname, '..', 'client');

app.set('port', process.env.PORT || 8080);
app.use(express.static(clientDir));
app.use('/api', api);
app.get('/app.js', browserify(path.join(clientDir, 'js', 'app.js')), {});
app.get('*', function (req, res) {
  res.sendFile('index.html', {root: __dirname + '/assets'});
});

app.listen(app.get('port'));
