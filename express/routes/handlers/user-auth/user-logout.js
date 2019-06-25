const common = require('../common/common');
const auth = require('../common/common-auth');
const db = require('../common/common-db');
const http = require('../common/common-db');

// Calls auth_logout on client credentials in env
// Returns Promise of resolution
function call_user_logout(env) {
  // Stored Procedure: auth_logout
  db.call(
    env, 'auth_logout',
    [
      env.auth.client.id,
      env.auth.client.authcode
    ]
  ).then(
    // query success handling
    (result) => {
      if (result.affectedRows > 0) {
        http.ok();
      } else {
        http.send(
          http.status.BAD_REQUEST,
          {desc: 'Bad or expired client credentials'}
        );
      }
    },
  ).catch(
    // query error handling
    (e) => {
      http.send(
        http.status.INTERNAL_SERVER_ERROR,
        {
          desc: 'Unable to safely logout client',
          error: { code: e.code, msg: e.sqlMessage }
        });
    }
  )
}

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
