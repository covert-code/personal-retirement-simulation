const db = require('../../common/common-db');
const http = require('../../common/common-http');

// Calls user_delete on user credentials in env
// Returns Promise of resolution
// Sends HTTP on success
function call_user_delete(env) {
  // Stored Procedure: user_delete
  return db.call(env,
    'user_delete',
    [
      env.auth.user.user_email,
      env.auth.user.password.hash
    ]
  ).then(
    // query success handling
    (result) => {
      if (result == null) { return null; }

      if (result.affectedRows > 0) {
        http.ok(env);
      } else {
        http.send(env,
          http.status.BAD_REQUEST,
          {desc: 'Username or password is incorrect'}
        );
      }
    },
  ).catch(
    // query error handling
    (e) => {
      http.send(env,
        http.status.INTERNAL_SERVER_ERROR,
        {
          desc: 'Unable to delete user',
          error: { code: e.code, msg: e.sqlMessage }
        }
      );
    }
  );
}

module.exports = call_user_delete;
