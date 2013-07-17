/**
 * Module dependencies
 */

var assert = require('assert'),
    errors = require('../');

describe('waterline-errors', function() {

  it('should have sub modules', function() {
    assert(Object.keys(errors).length);
  });

  it('should be instance of Error', function() {
    for(var module in errors) {
      for(var error in errors[module]) {
        assert(errors[module][error] instanceof Error);
      }
    }
  });

  it('should not be mutable', function() {
    for(var module in errors) {
      for(var error in errors[module]) {
        errors[module][error] = 'changed';
        assert(errors[module][error] instanceof Error);
      }
    }
  });

});