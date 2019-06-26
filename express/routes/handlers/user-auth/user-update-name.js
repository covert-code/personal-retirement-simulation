const common = require('../common/common');
const auth = require('../common/common-auth');

const populate_login = require('./user-login').populate_login;
const call_user_update_name = require('./queries/user-update-name-query');
const call_user_read = require('./queries/user-read-query');

async function user_update_name_handler(req, res) {
  // Initialize
  var env = await common.get_env(req, res);
  if (env == null || !env.active) { return; }

  // Read and validate login credentials
  await populate_login(env);
  // Get user  name from request
  auth.req_read_user_name(env);

  // Stored Procedure: user_create
  await call_user_update_name(env).then(
    async () => {
      // Stored Procedure: auth_login
      await call_user_read(env);
    }, (e) => {} // reject reraised errors
  );

  // Terminate
  common.end_env(env);
}

module.exports.handler = user_update_name_handler;
