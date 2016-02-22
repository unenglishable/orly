var express = require('express');
var apiThing = require('./pages/thing/api');

var router = module.exports = express.Router();

router.use('/thing', apiThing);
