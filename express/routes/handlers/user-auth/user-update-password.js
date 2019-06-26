const common = require('../common/common');
const auth = require('../common/common-auth');

const populate_login = require('./user-login').populate_login;
const call_user_update_password = require('./queries/user-update-password-query');
const call_user_read = require('./queries/user-read-query');

async function user_update_password_handler(req, res) {
  // Initialize
  var env = await common.get_env(req, res);
  if (env == null || !env.active) { return; }

  // Read and validate login credentials
  await populate_login(env);
  // Get new user password from request
  auth.req_read_new_user_password(env);

  // Generate new password hash
  await auth.new_hash(env);

  // Stored Procedure: user_update_password
  await call_user_update_password(env).then(
    async () => {
      // Stored Procedure: user_read
      await call_user_read(env);
    }, (e) => {} // reject reraised errors
  );

  // Terminate
  common.end_env(env);
}

module.exports.handler = user_update_password_handler;
