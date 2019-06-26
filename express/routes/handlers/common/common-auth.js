const crypto = require('../../../modules/crypto/bcrypt');

const env_lib = require('./environment.js');
const http = require('./common-http.js');

/* Init and Destroy */
function auth_init(env) {
  env.auth.user = {};
  env.auth.client = {};
}

module.exports.init_env = async (env) => {
  if (env.active) {
    env.auth = {};
    auth_init(env);
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
// Set a user email
function set_user_email(env, email) {
  env.auth.user.user_email = email;
}
module.exports.set_user_email = set_user_email;

// Sets a user password
function set_user_password(env, password) {
  env.auth.user.password = { plaintext: password };
}
module.exports.set_user_password = set_user_password;

function set_user_password_hash(env, hash) {
  env.auth.user.password.hash = hash;
}
module.exports.set_user_password_hash = set_user_password_hash;

// Set a user email/password pair from HTTP request body
function req_read_user_auth(env) {
  var data = http.req_body(env).user;
  set_user_email(env, data.user_email);
  set_user_password(env, data.user_password);
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
// Generate a hash with a random salt and write it
async function hash(env) {
  try {
    set_user_password_hash(env,
      await crypto.hash_gen(
        env.auth.user.password.plaintext
      )
    );
  }
  catch (e) {
    http.send(
      env,
      http.status.INTERNAL_SERVER_ERROR,
      { desc:'Unable to generate password hash', error: e }
    );
  }
}
module.exports.hash = hash;

// Generate a hash with a random salt and write it to new
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
  }
}

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

/* Update Reading */
function init_new_user_storage(env) {
  if (!('new_user' in env.auth)) {
    env.auth.new_user = {};
  }
}

// Set a user's new name
function set_new_user_name(env, title, first, initial, last) {
  init_new_user_storage(env);
  env.auth.new_user.name = [title, first, initial, last];
}

// Set a user's new name from HTTP request body
function req_read_new_user_name(env) {
  var data = http.req_body(env).user;
  set_new_user_name(
    env,
    data.user_name_title,
    data.user_name_first,
    data.user_name_initial,
    data.user_name_last
  )
}
module.exports.req_read_new_user_name = req_read_new_user_name;

// Sets a user's new email
function set_new_user_email(env, email) {
  init_new_user_storage(env);
  env.auth.new_user.user_email = email;
}

// Set a user email/password pair from HTTP request body
function req_read_new_user_email(env) {
  var data = http.req_body(env).user;
  set_new_user_email(env, data.new_user_email);
}
module.exports.req_read_new_user_email = req_read_new_user_email;

// Sets a user's new password plaintext
function set_new_user_password(env, password) {
  init_new_user_storage(env);
  env.auth.new_user.password = { plaintext: password };
}

// Sets a user's new password hash
async function set_new_user_password_hash(env) {
  try {
    env.auth.new_user.password.hash = await crypto.hash_gen(
      env.auth.new_user.password.plaintext
    );
  }
  catch (e) {
    http.send(env,
      http.status.INTERNAL_SERVER_ERROR,
      { desc:'Unable to generate password hash', error: e }
    );
  }
}
module.exports.new_hash = set_new_user_password_hash;

// Sets a user's new password plaintext from HTTP request body
function req_read_new_user_password(env) {
  var data = http.req_body(env).user;
  set_new_user_password(env, data.new_user_password);
}
module.exports.req_read_new_user_password = req_read_new_user_password;
