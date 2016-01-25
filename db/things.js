var path = require('path');
var db = require(path.join(__dirname, 'db'));
var things = module.exports = {};
var Promise = require('bluebird');
var CreationError = Promise.OperationalError;
var NotFoundError = Promise.OperationalError;

var thingSchema = db.Schema({
  name: { type: String, unique: true },
  doots: Number
});

thingSchema.methods = {
  updoot: function() {
    this.doots++;
  },
  downdoot: function() {
    this.doots--;
  }
};

var Thing = db.model('Thing', thingSchema);

things.create = function(thingData) {
  var newThing = new Thing({
    name: thingData.name,
    doots: 1
  });
  return newThing.saveAsync()
  .catch(function(error) {
    return new CreationError('Thing could not be created: ' + error);
  });
};

things.find = function(thingData) {
  return Thing.findAsync({ name: thingData.name });
};

things.all = function() {
  return Thing.findAsync();
};

things.updoot = function(thingData) {
  return Thing.findOneAsync({ name: thingData.name })
  .then(function(foundThing) {
    foundThing.updoot();
    return foundThing.saveAsync();
  });
};

things.downdoot = function(thingData) {
  return Thing.findOneAsync({ name: thingData.name })
  .then(function(foundThing) {
    foundThing.downdoot();
    return foundThing.saveAsync();
  });
};

things.delete = function(thingData) {
  return Thing.findOneAsync({ name: thingData.name })
  .then(function(foundThing) {
    if (foundThing) {
      return foundThing.removeAsync();
    }
    else { return new NotFoundError('thing didn\'t exist'); }
  });
};
