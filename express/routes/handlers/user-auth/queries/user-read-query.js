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
      if (result == null) { return null; }

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
            user: {
              user_email: select_result.user_email,
              user_name_title: select_result.user_title,
              user_name_first: select_result.user_fname,
              user_name_initial: select_result.user_initial,
              user_name_last: select_result.user_lname
            }
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
          error: { code: e.code, msg: e.sqlMessage, stack: e.stack }
        }
      );
    }
  );
}

module.exports = call_user_read;
