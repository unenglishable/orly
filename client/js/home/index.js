var m = require('mithril');
var formatters = require('./formatters');

var binds = function(prop) {
  return { oninput: m.withAttr('value', prop), value: prop() };
};

var message = m.prop('');
var isIt = m.prop('');

var current = {
  view: function() {
    var input = message();
    return m('div', formatters.currentInput(input));
  }
};

var result = {
  view: function() {
    var input = isIt();
    return m('div', formatters.result(input));
  }
};

var isItASearchBox = {
  view: function() {
    var action = binds(message);
    action.onkeyup = function(e) {
       if (e.keyCode === 13) {
         isIt(message());
       }
       else {
         isIt('');
       }
    };
    return m('input', action);
  }
};

m.module(document.getElementById('isItASearchBox'), isItASearchBox);
m.module(document.getElementById('current'), current);
m.module(document.getElementById('result'), result);
