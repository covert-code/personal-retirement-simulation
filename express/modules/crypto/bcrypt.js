const config_bcrypt = require('../../config/bcrypt.json');
const bcrypt = require('bcrypt');

module.exports = {
  // Usage: hash_gen(plaintext, (hash) => { code_body })
  hash_gen: (plaintext, next) => {
    bcrypt.hash(
      plaintext,
      config_bcrypt.rounds,
      (err, hash) => {
        next(hash);
      }
    )
  },

  // Uses the bcrypt.compare function to compare two hashes for equality
  // Usage: hash_cmp(plaintext, hash, (result) => { code_body })
  hash_cmp: (plaintext, hash, next) => {
    bcrypt.compare(
      plaintext,
      hash,
      (err, result) => {
        if (err)
        next(result);
      }
    )
  },
}
