const config_bcrypt = require('../../config/bcrypt.json');
const bcrypt = require('bcrypt');

module.exports = {
  // Uses the bcrypt.hash function to generate a salted hash according to config
  // Usage: hash_gen(plaintext)
  // Returns promise of hash
  hash_gen: (plaintext) => {
    return bcrypt.hash(
      plaintext,
      config_bcrypt.rounds
    ).catch((e) => {
      console.error('(/modules/crypto/bcrypt) error generating hash: ' + e.stack);
      throw e;
    });
  },

  // Uses the bcrypt.hash function to generate a hash according to config and chosen salt
  // Usage: hash_gen_salty(plaintext, salt)
  // Returns promise of hash
  hash_gen_salty: (plaintext, salt) => {
    return bcrypt.hash(
      plaintext,
      salt
    ).catch((e) => {
      console.error('(/modules/crypto/bcrypt) error generating hash: ' + e.stack);
      throw e;
    });
  },

  // Uses the bcrypt.compare function to compare two hashes for equality
  // Usage: hash_cmp(plaintext, hash)
  // Returns promise of boolean
  hash_cmp: (plaintext, hash) => {
    return bcrypt.compare(
      plaintext,
      hash
    ).catch((e) => {
      console.error('(/modules/crypto/bcrypt) error comparing hash: ' + e.stack);
      throw e;
    });
  }
}
