'use strict';
// jshint mocha:true

require('should');

var requireWithGlobals = require('./');

it('should require with a specified global', function() {
  global.should.not.have.property('foobar');
  var globals = {foobar: 100};
  var result = requireWithGlobals('./test-case.js', globals);
  result.should.equal(115);
  global.should.not.have.property('foobar');
});
