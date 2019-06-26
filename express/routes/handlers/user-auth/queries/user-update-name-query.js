const db = require('../../common/common-db');
const http = require('../../common/common-http');

// Calls user_update_name on user credentials in env
// Returns Promise of resolution
function call_user_update_name(env) {
  // Stored Procedure: user_update_name
  return db.call(env,
    'user_update_name',
    [
      env.auth.user.user_email,
      env.auth.user.password.hash,
      ...env.auth.user.name // unpacking
    ]
  ).then(
    // query success handling
    (result) => {
      if (result == null) { return null; }

      if (result.affectedRows == 0) {
        http.send(env,
          http.status.BAD_REQUEST,
          {desc: 'Username or password is incorrect'}
        );
      }
    },
  ).catch(
    // query failure handling
    (e) => {
      http.send(env,
        http.status.INTERNAL_SERVER_ERROR,
        {
          desc: 'Unable to update name',
          error: { code: e.code, msg: e.sqlMessage }
        }
      );
      return Promise.reject(e); // reraise error for control behavior
    }
  );
}

module.exports = call_user_update_name;
