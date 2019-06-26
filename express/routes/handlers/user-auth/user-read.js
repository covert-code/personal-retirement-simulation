const common = require('../common/common');
const auth = require('../common/common-auth');

const populate_login = require('./user-login').populate_login;
const call_user_read = require('./queries/user-read-query');

async function user_read_handler(req, res) {
  // Initialize
  var env = await common.get_env(req, res);
  if (env == null || !env.active) { return; }

  // Get client credentials from request
  await populate_login(env);

  // Call read
  await call_user_read(env);

  // Terminate
  common.end_env(env);
}

module.exports.handler = user_read_handler;
