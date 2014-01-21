![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# waterline-errors

A module for errors returned from waterline schema, queries, and adapters.


## Usage

```javascript
var Err = require('waterline-errors');


function someFn (options, cb) {
  var success = false;
  if (success) return cb();
  return cb(Err.adapter.collectionNotRegistered);
}

```

## License
MIT
