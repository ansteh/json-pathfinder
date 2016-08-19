'use strict';
const pathfinder = require('./index.js');

let input = {
  a: {
    b: 1,
    c: 2,
    d: [1, 2, 'test'],
    e: {
      f: ['123', 1]
    }
  }
};

let paths = pathfinder.parse(input);
console.log(JSON.stringify(paths, null, 2));
