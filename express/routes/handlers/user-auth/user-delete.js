const common = require('../common/common');
const auth = require('../common/common-auth');

const populate_login = require('./user-login').populate_login;
const call_user_delete = require('./queries/user-delete-query');

async function user_delete_handler(req, res) {
  // Initialize
  var env = await common.get_env(req, res);
  if (env == null || !env.active) { return; }

  // Read and validate login credentials
  await populate_login(env);

  // Stored Procedure: user_delete
  await call_user_delete(env);

  // Terminate
  common.end_env(env);
}

module.exports.handler = user_delete_handler;
