var formatters = module.exports = {};

formatters.currentInput = function(input) {
  if (input !== '') {
    return 'Hit enter to check if "' + input + '" is a thing!';
  }
  else {
    return 'Is that thing you\'re thinking of even a thing?  Type below to find out!';
  }
};
