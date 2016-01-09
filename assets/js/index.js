var m = require('mithril');

var isItASearchBox = {
  view: function() {
    return m("input");
  }
};

m.module(document.getElementById("isItASearchBox"), isItASearchBox);
