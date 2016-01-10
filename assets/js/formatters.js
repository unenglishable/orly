var formatters = module.exports = {};

formatters.currentInput = function(input) {
  input = input.trim();
  if (input !== '') {
    return 'Hit <enter> to check if "' + input + '" is a thing!';
  }
  else {
    return 'Is that thing you\'re thinking of even a thing?  Type below to find out!';
  }
};

formatters.result = function(input) {
  input = input.trim();
  if (input !== '') {
    return '"' + input + '" is a thing!';
  }
};
