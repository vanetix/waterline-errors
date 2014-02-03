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
    expose(m, error, modules[m][error]);
  }
}

/**
 * Helper function for exposing errors,
 * also edits the stack trace to remove itself.
 *
 * @param {Object} anchor
 * @param {String} name
 * @param {String} message
 */

function expose(anchor, name, message) {
  Object.defineProperty(errors[anchor], name, {
    enumerable: true,
    get: function() {
      var err = new Error();

      err.name = capitalize(anchor) + 'Error';
      err.message = message;
      Error.captureStackTrace(err, arguments.callee);
      return err;
    }
  });
}

/**
 * Capitalize the first letter of `str`
 *
 * @param {String} str
 * @return {String}
 */

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}