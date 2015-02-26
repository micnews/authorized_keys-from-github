#!/usr/bin/env node

var generate = require('../');

generate(process.argv.slice(2), function (err, keys) {
  if (err) throw err;

  console.log(keys);
});
