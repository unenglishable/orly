var path = require('path');
var mongoose = require('mongoose');
var things = module.exports = {};
var Promise = require('bluebird');
var CreationError = Promise.OperationalError;
var NotFoundError = Promise.OperationalError;

var thingSchema = mongoose.Schema({
  name: { type: String, unique: true },
  nods: Number,
  doots: Number
});

thingSchema.methods = {
  nod: function() {
    this.nods++;
  },
  updoot: function() {
    this.doots++;
  },
  downdoot: function() {
    this.doots--;
  }
};

var Thing = mongoose.model('Thing', thingSchema);

things.create = function(thingData) {
  var newThing = new Thing({
    name: thingData.name,
    nods: 1,
    doots: 0
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

things.nod = function(thingData) {
  return Thing.findOneAsync({ name: thingData.name })
  .then(function(foundThing) {
    foundThing.nod();
    return foundThing.saveAsync();
  });
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
