const db = require('../../common/common-db');
const http = require('../../common/common-http');

// Calls auth_login on user credentials in env
// Returns Promise of resolution
// Sends HTTP on success
function call_auth_login(env) {
  // Stored procedure: auth_login
  return db.call(
    env, 'auth_login',
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
            client: {
              id: select_result.token_client_id,
              auth: select_result.token_auth_code
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
          desc: 'Unable to generate login',
          error: { code: e.code, msg: e.sqlMessage }
        }
      );
    }
  );
}

module.exports = call_auth_login;
