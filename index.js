/**
 * Require all error modules
 */

var modules = require('./lib');

/**
 * Expose `errors`
 */

var errors = module.exports = exports;

/**
 * Turn all errors into a factory
 */

for(var m in modules) {
  errors[m] = {};

  for(var error in modules[m]) {
    expose(errors[m], error, modules[m][error]);
  }
}

/**
 * Helper function for exposing errors
 *
 * @param {Object} anchor
 * @param {String} name
 * @param {String} message
 */

function expose(anchor, name, message) {
  Object.defineProperty(anchor, name, {
    enumerable: true,
    get: function() {
      return new Error(message);
    }
  });
}