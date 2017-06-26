# ES6 shims [![NPM Version](https://img.shields.io/npm/v/es6-shims.svg)](https://npmjs.org/package/es6-shims) [![Build Status](https://travis-ci.org/NatLibFi/es6-shims.svg)](https://travis-ci.org/NatLibFi/es6-shims) [![Test Coverage](https://codeclimate.com/github/NatLibFi/es6-shims/badges/coverage.svg)](https://codeclimate.com/github/NatLibFi/es6-shims/coverage)

A collection of [ES6](https://en.wikipedia.org/wiki/ECMAScript#ES6) [shims](https://en.wikipedia.org/wiki/Shim_%28computing%29) that use native implementations if available.

If you are looking for ES6 polyfills check out [es6-polyfills](https://github.com/natlibfi/es6-polyfills).

## List of shims

- **Array**
  - *Array.prototype.find* 
  - *Array.prototype.findIndex*
  - *Array.prototype.fill*

## Installation

Clone the sources and install the package (In the source directory) on command line using `npm`:

```sh
npm install
```

## Testing

Run the following NPM script to lint, test and check coverage of the code:

```javascript

npm run check

```

## Usage

Individual shims can be found inside the containing object's directory, e.g. `lib/shims/array/`

### AMD

```javascript

define(['es6-shims/lib/shims/array'], function(shim_array) {

  // index === 1
  var index = shim_array.find([1, 2, 3], function(element) {
    return element === 2;
  });

});


```

### Browser globals

```javascript

  // index === 1
  var index = es6_shim_array.find([1, 2, 3], function(element) {
    return element === 2;
  });

});


```

### Node.js

```javascript

  var shim_array = require('es6-shims/lib/shims/array');
  // index === 1
  var index = shim_array.find([1, 2, 3], function(element) {
    return element === 2;
  });


```

## License and copyright

Copyright (c) 2016-2017 **University Of Helsinki (The National Library Of Finland)**

This project's source code is licensed under the terms of **GNU Lesser General Public License Version 3** or any later version.
