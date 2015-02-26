var map = require('map-async');
var request = require('request');
var assert = require('assert');

module.exports = function (users, callback) {
  assert(Array.isArray(users), 'users must be array');

  map(users, getPublicKey, function (err, results) {
    if (err) {
      return callback(err);
    }

    callback(null, results.join('\n'));
  });
}

function getPublicKey(username, callback) {
  request('https://github.com/' + username + '.keys', function (err, res, keys) {
    if (err) {
      return callback(err);
    }

    var comment = '# Public key(s) to github.com/' + username + '\n';

    callback(err, comment + keys);
  });
}
