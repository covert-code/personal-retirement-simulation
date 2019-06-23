const config_bcrypt = require('../../config/bcrypt.json');
const bcrypt = require('bcrypt');

module.exports = {
  hash_gen: (plaintext, next) => {
    bcrypt.hash(
      plaintext,
      config_bcrypt.rounds,
      (err, hash) => {
        next(hash);
      }
    )
  }
}
