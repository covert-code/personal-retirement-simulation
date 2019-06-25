const crypto = require('../../../modules/crypto/bcrypt');

const common = require('../common/common');
const auth = require('../common/common-auth');
const http = require('../common/common-http');

const call_auth_salt = require('./queries/user-salt-query');
const call_auth_login = require('./queries/user-login-query');

async function user_login_handler(req, res) {
  // Initialize
  var env = await common.get_env(req, res);
  if (env == null || !env.active) { return; }

  // Get user credentials from request
  auth.req_read_user_auth(env);

  // Stored Procedure: auth_salt
  env.auth.user.password.salt = await call_auth_salt(env);
  // Terminate if salt is not found (fatal)
  if (env.auth.user.password.salt == null) { common.end_env(env); return; }

  
  // Generate Hash
  try {
    env.auth.user.password.hash = await crypto.hash_gen_salty(
      env.auth.user.password.plaintext,
      env.auth.user.password.salt
    )
  }
  catch (e) {
    res.status(http.status.INTERNAL_SERVER_ERROR).send(
      { desc:'Unable to generate password hash', error: e }
    );
    return;
  }


  // Stored Procedure: auth_login
  await call_auth_login(env);

  // Terminate
  common.end_env(env);
}

module.exports.handler = user_login_handler;
