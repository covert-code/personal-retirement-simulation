const common = require('../common/common');
const auth = require('../common/common-auth');

const populate_login = require('./user-login').populate_login;
const call_user_update_email = require('./queries/user-update-email-query');
const call_user_read = require('./queries/user-read-query');

async function user_update_email_handler(req, res) {
  // Initialize
  var env = await common.get_env(req, res);
  if (env == null || !env.active) { return; }

  // Read and validate login credentials
  await populate_login(env);
  // Get new user email from request
  auth.req_read_new_user_email(env);

  // Stored Procedure: user_update_email
  await call_user_update_email(env).then(
    async () => {
      // Stored Procedure: user_read
      await call_user_read(env);
    }, (e) => {} // reject reraised errors
  );

  // Terminate
  common.end_env(env);
}

module.exports.handler = user_update_email_handler;
