var express = require('express');
var Thing = require('./model');
var sendPage = require('../../utils/sendPage');

var router = module.exports = express.Router();

var baseRoute = '/things';

router.get('/', function(request, response) {
  sendpage(response, things);
});
