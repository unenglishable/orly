var mongoose = require('mongoose');
var mongooseBird = require('mongoose-bird')(mongoose);
var mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/myproject';
mongoose.connect(mongoUrl);
module.exports = mongoose;
