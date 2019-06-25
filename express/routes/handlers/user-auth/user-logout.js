const common = require('../common/common');
const auth = require('../common/common-auth');
const call_user_logout = require('./user-logout-query');

async function user_logout_handler(req, res) {
  // Initialize
  var env = await common.get_env(req, res);
  if (env == null || !env.active) { return; }

  // Get client credentials from request
  auth.req_read_client_auth(env);

  // Call logout
  await call_user_logout(env);

  // Terminate
  common.end_env(env);
}

module.exports.handler = user_logout_handler;
