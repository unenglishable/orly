var express = require('express');
var apiThing = require('./pages/thing/apiThing');

var router = module.exports = express.Router();

router.use('/thing', apiThing);
