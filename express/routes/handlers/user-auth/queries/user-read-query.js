const db = require('../../common/common-db');
const http = require('../../common/common-http');

// Calls user_read on user credentials in env
// Returns Promise of resolution
// Sends HTTP on success
function call_user_read(env) {
  // Stored Procedure: user_read
  return db.call(env,
    'user_read',
    [
      env.auth.user.user_email,
      env.auth.user.password.hash
    ]
  ).then(
    // query success handling
    (result) => {
      if (result[0].length == 0) {
        // query result empty
        http.send(env,
          http.status.BAD_REQUEST,
          {desc: 'Username or password is incorrect'}
        );
        return null;
      } else {
        var select_result = result[0][0];
        http.send(env,
          http.status.OK,
          {
            select_result
          }
        )
      }
    },
  ).catch(
    // query error handling
    (e) => {
      http.send(env,
        http.status.INTERNAL_SERVER_ERROR,
        {
          desc: 'Unable to read user profile',
          error: { code: e.code, msg: e.sqlMessage }
        }
      );
    }
  );
}

module.exports = call_user_read;
