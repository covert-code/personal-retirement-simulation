const db = require('../../../modules/db/mysql-connect');
const crypto = require('../../../modules/crypto/bcrypt');
const http_status = require('http-status-codes');

async function user_login_handler(req, res) {
  // Generate Hash
  var user_pw_hash = null;
  try { user_pw_hash = await crypto.hash_gen(req.body.user_password) }
  catch (e) {
    res.status(http_status.INTERNAL_SERVER_ERROR).send(
      { desc:'Unable to generate password hash', error: e }
    );
    return;
  }

  // Formalize Query Data
  var query_data = {
    /* Credentials */
    user_email: req.body.user_email,
    user_password: user_pw_hash
  };

  // Attempt DB Connection
  var con = null;
  try { con = await db.open(); }
  catch (e) {
    res.status(http_status.INTERNAL_SERVER_ERROR).send(
      { desc:'Unable to connect to database', error: e }
    );
    return;
  }

  // Stored Procedure: auth_login
  await db.stored(
    con, 'auth_login',
    [
      query_data.user_email,
      query_data.user_password
    ]
  ).then(
    // query success handling
    (result) => {
      var select_result = result[1];
      res.status(http_status.OK).send({
        token_client_id: select_result.token_client_id,
        token_auth_code: select_result.token_auth_code
      })
    },
  ).catch(
    // query error handling
    (e) => {
      res.send({
        desc: err_desc,
        error: { code: e.code, msg: e.sqlMessage }
      });
    }
  )

  // Terminate
  db.close(con);
  if (!res.headersSent) { res.status(http_status.NO_CONTENT).end(); }
}

module.exports = user_login_handler;
