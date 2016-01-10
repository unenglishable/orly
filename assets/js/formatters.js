var formatters = module.exports = {};

formatters.currentInput = function(input) {
  var output = '';
  if (input !== '') {
    return 'Hit enter to check if "' + input + '" is a thing!';
  }
  else {
    return 'Is it a thing?!';
  }
};
