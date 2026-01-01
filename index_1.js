const crypto = require('crypto');

function anotherInsecurePassword() {
  // BAD: the random suffix is not  secure
  var randomBytes = crypto.randomBytes(4);
  var suffix = randomBytes.readUInt32BE(0) / Math.pow(2, 32);
  var password = "sssAAAA" + suffix;
  return password;
}