const common = require('../common/common');
const auth = require('../common/common-auth');

const call_auth_salt = require('./queries/auth-salt-query');
const call_auth_login = require('./queries/auth-login-query');

async function user_login_handler(req, res) {
  // Initialize
  var env = await common.get_env(req, res);
  if (env == null || !env.active) { return; }

  // Read and validate login credentials
  await populate_login(env);

  // Stored Procedure: auth_login
  await call_auth_login(env);

  // Terminate
  common.end_env(env);
}

module.exports.handler = user_login_handler;

async function populate_login(env) {
  // Get user credentials from request
  auth.req_read_user_auth(env);

  // Stored Procedure: auth_salt
  env.auth.user.password.salt = await call_auth_salt(env);
  // Terminate if salt is not found (fatal)
  if (env.auth.user.password.salt == null) { common.end_env(env); return; }

  // Generate password hash
  if (await auth.hash_salty(env) == null) { common.end_env(env); return; }
}

module.exports.populate_login = populate_login;
