require('dotenv').config({silent: true});
var path = require('path');
var express = require('express');
var app = express();

app.set('port', process.env.PORT || 8080);
app.use(express.static(path.join(__dirname, '/dist')));
app.get('*', function (req, res) {
  res.sendFile('index.html', {root: __dirname + '/assets'});
});

app.listen(app.get('port'));
