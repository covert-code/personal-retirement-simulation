const db = require('../../common/common-db');
const http = require('../../common/common-http');
const auth = require('../../common/common-auth');

// Calls user_update_password on user credentials in env
// Returns Promise of resolution
function call_user_update_password(env) {
  // Stored Procedure: user_update_password
  return db.call(env,
    'user_update_password',
    [
      env.auth.user.user_email,
      env.auth.user.password.hash,
      // read from body directly
      env.auth.new_user.password.hash
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
      } else {
        // it worked, so update env with new credentials
        auth.set_user_password_hash(env, env.auth.new_user.password.hash);
      }
    },
  ).catch(
    // query failure handling
    (e) => {
      console.log(e);
      http.send(env,
        http.status.INTERNAL_SERVER_ERROR,
        {
          desc: 'Unable to update email',
          error: { code: e.code, msg: e.sqlMessage, stack: e.stack }
        }
      );
      return Promise.reject(e); // reraise error for control behavior
    }
  );
}

module.exports = call_user_update_password;
