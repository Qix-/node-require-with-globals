'use strict';

var callWithGlobals = require('call-with-globals');

module.exports = function requireWithGlobals(module, globals) {
  return callWithGlobals(function() {
    return require(module);
  }, globals);
};
