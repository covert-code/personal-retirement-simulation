const db = require('../../common/common-db');
const http = require('../../common/common-http');

// Calls user_create on user information in env
// Returns Promise of resolution
function call_user_create(env) {
  // Stored Procedure: user_create
  return db.call(env,
    'user_create',
    [
      env.auth.user.user_email,
      env.auth.user.password.hash,
      ...env.auth.user.name // unpacking
    ],
  ).catch(
    // query error handling
    (e) => {
      if (e.code == 'ER_DUP_ENTRY') {
        http.send(env,
          http.status.BAD_REQUEST,
          {
            desc: 'Email is already registered',
            error: { code: e.code, msg: e.sqlMessage }
          }
        );
      } else {
        http.send(env,
          http.status.INTERNAL_SERVER_ERROR,
          {
            desc: 'Unable to create new user',
            error: { code: e.code, msg: e.sqlMessage }
          }
        );
      }
      return Promise.reject(e); // reraise error for control behavior
    }
  );
}

module.exports = call_user_create;
