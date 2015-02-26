var test = require('tape');
var generate = require('./');

test('one public key', function (t) {
  generate([ 'kesla' ], function (err, keys) {
    if (err) {
      return t.end(err);
    }

    t.equal(keys.split('\n')[0], '# Public key(s) to github.com/kesla');
    t.ok(/^ssh\-rsa [a-zA-Z0-9+/]+=?=?$/.test(keys.split('\n')[1]), 'key has correct form');
    t.end();
  });
});
