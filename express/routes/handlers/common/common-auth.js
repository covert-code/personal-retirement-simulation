const db = require('../../../modules/db/mysql-connect');
const http_status = require('http-status-codes');
const crypto = require('../../../modules/crypto/bcrypt');

const env_lib = require('./environment.js');
const common_http = require('./common-http.js');

/* Init and Destroy */
module.exports.init_env = async (env) => {
  if (env.active) {
    env.auth = {};
  }
}

/* Additional exported functions */

/* Client ID and Authentication */
// Set a client id/auth pair
function set_client_auth(env, id, authcode) {
  env.auth.client = {
    id: id,
    authcode: authcode
  }
}
module.exports.set_client_auth = set_client_auth;

// Set a client id/auth pair from HTTP request body
function req_read_client_auth(env) {
  var data = common_http.req_body(env).client;
  set_client_auth(env, data.id, data.authcode);
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
  var data = common_http.req_body(env).user;
  set_user_auth(env, data.user_email, data.user_password);
}
module.exports.req_read_user_auth = req_read_user_auth;

