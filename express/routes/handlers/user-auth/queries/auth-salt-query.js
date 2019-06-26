const db = require('../../common/common-db');
const http = require('../../common/common-http');

// Calls auth_logout on user_email in env
// Returns promise of salt
function call_auth_salt(env) {
  // Stored Procedure: auth_salt
  return db.call(env,
    'auth_salt',
    [ env.auth.user.user_email ]
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
        // query result exists
        var select_result = result[0][0];
        return select_result.user_password_salt;
      }
    },
  ).catch(
    // query error handling
    (e) => {
      http.send(env,
        http.status.INTERNAL_SERVER_ERROR,
        {
          desc: 'Unable to fetch salt',
          error: { code: e.code, msg: e.sqlMessage, stack: e.stack }
        }
      );
    }
  );
}

module.exports = call_auth_salt;
