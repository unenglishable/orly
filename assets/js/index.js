var m = require('mithril');

var binds = function(prop) {
  return { oninput: m.withAttr('value', prop), value: prop() };
};

var message = m.prop('');

var result = {
  view: function() {
    var input = message();
    var output = '';
    if (input !== '') {
      output = 'Hit enter to check if "' + input + '" is a thing!';
      console.log('message: "'+input+'"');
    }
    else {
      output = 'Is it a thing?!';
    }
    return m('div', output);
  }
};

var isItASearchBox = {
  view: function() {
    return m('input', binds(message));
  }
};

m.module(document.getElementById('isItASearchBox'), isItASearchBox);
m.module(document.getElementById('result'), result);
