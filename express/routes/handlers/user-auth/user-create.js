const common = require('../common/common');
const auth = require('../common/common-auth');

const call_auth_login = require('./queries/user-login-query');
const call_user_create = require('./queries/user-create-query');

async function user_create_handler(req, res) {
  // Initialize
  var env = await common.get_env(req, res);
  if (env == null || !env.active) { return; }

  // Get user credentials and name from request
  auth.req_read_user_auth(env);
  auth.req_read_user_name(env);

  // Generate hash
  await auth.hash(env);

  // Stored Procedure: user_create
  await call_user_create(env).then(
    async () => {
      // Stored Procedure: auth_login
      await call_auth_login(env);
    }, (e) => {} // reject reraised errors
  );

  // Terminate
  common.end_env(env);
}

module.exports.handler = user_create_handler;
