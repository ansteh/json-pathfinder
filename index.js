'use strict';
const _ = require('lodash');
const stack = require('json-stack');

const parse = (json) => {
  return _.keys(stack.horizontal(json));
};

module.exports = {
  parse: parse
};
