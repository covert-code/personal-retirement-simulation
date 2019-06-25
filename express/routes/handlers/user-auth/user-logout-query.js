const db = require('../common/common-db');
const http = require('../common/common-http');

// Calls auth_logout on client credentials in env
// Returns Promise of resolution
// Sends HTTP on success
function call_auth_logout(env) {
  // Stored Procedure: auth_logout
  return db.call(env,
    'auth_logout',
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
        http.send(env,
          http.status.BAD_REQUEST,
          {desc: 'Bad or expired client credentials'}
        );
      }
    },
  ).catch(
    // query error handling
    (e) => {
      http.send(env,
        http.status.INTERNAL_SERVER_ERROR,
        {
          desc: 'Unable to safely logout client',
          error: { code: e.code, msg: e.sqlMessage }
        }
      );
    }
  );
}

module.exports = call_auth_logout;
