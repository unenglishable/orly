var m = require('mithril');
var formatters = require('./formatters');

var binds = function(prop) {
  return { oninput: m.withAttr('value', prop), value: prop() };
};

var message = m.prop('');

var result = {
  view: function() {
    var input = message();
    return m('div', formatters.currentInput(input));
  }
};

var isItASearchBox = {
  view: function() {
    return m('input', binds(message));
  }
};

m.module(document.getElementById('isItASearchBox'), isItASearchBox);
m.module(document.getElementById('result'), result);
