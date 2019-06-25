const crypto = require('../../../modules/crypto/bcrypt');

const env_lib = require('./environment.js');
const http = require('./common-http.js');

/* Init and Destroy */
module.exports.init_env = async (env) => {
  if (env.active) {
    env.auth = {};
  }
}

/* Additional exported functions */

/* Client ID and Authentication */
// Set a client id/auth pair
function set_client_auth(env, id, auth_code) {
  env.auth.client = {
    id: id,
    auth_code: auth_code
  }
}
module.exports.set_client_auth = set_client_auth;

// Set a client id/auth pair from HTTP request body
function req_read_client_auth(env) {
  var data = http.req_body(env).client;
  set_client_auth(env, data.id, data.auth_code);
}
module.exports.req_read_client_auth = req_read_client_auth;

/* User ID and Authentication */
// Set a user email/password pair
function set_user_auth(env, email, password) {
  env.auth.user =
  {
    user_email: email,
    password: {
      plaintext: password
    }
  }
}

// Set a user email/password pair from HTTP request body
function req_read_user_auth(env) {
  var data = http.req_body(env).user;
  set_user_auth(env, data.user_email, data.user_password);
}
module.exports.req_read_user_auth = req_read_user_auth;

/* Name */
// Set a user's name
function set_user_name(env, title, first, initial, last) {
  env.auth.user.name = [title, first, initial, last];
}
module.exports.set_user_name = set_user_name;

// Set a user's name from HTTP request body
function req_read_user_name(env) {
  var data = http.req_body(env).user;
  set_user_name(
    env,
    data.user_name_title,
    data.user_name_first,
    data.user_name_initial,
    data.user_name_last
  )
}
module.exports.req_read_user_name = req_read_user_name;

/* Hashing */
// Generate a hash with a random salt
async function hash(env) {
  try {
    env.auth.user.password.hash = await crypto.hash_gen(
      env.auth.user.password.plaintext
    );
  }
  catch (e) {
    http.send(
      env,
      http.status.INTERNAL_SERVER_ERROR,
      { desc:'Unable to generate password hash', error: e }
    );
    return;
  }
}
module.exports.hash = hash;

// Generate a hash with a known salt
async function hash_salty(env) {
  // Generate Hash
  try {
    env.auth.user.password.hash = await crypto.hash_gen_salty(
      env.auth.user.password.plaintext,
      env.auth.user.password.salt
    )
    return env.auth.user.password.hash;
  }
  catch (e) {
    http.send(env,
      http.status.INTERNAL_SERVER_ERROR,
      { desc:'Unable to generate password hash', error: e }
    );
    return null;
  }
}
module.exports.hash_salty = hash_salty;
