const db = require('../../../modules/db/mysql-connect');
const crypto = require('../../../modules/crypto/bcrypt');
const http_status = require('http-status-codes');

async function user_create_handler(req, res) {
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
    user_password: user_pw_hash,
    /* Name */
    user_name: [
      req.body.user_name_title,
      req.body.user_name_first,
      req.body.user_name_initial,
      req.body.user_name_last
    ]
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

  // Stored Procedure: user_create
  var user_create_success = await db.stored(
    con, 'user_create',
    [
      query_data.user_email,
      query_data.user_password,
      ...query_data.user_name // unpacking
    ],
  ).then(
    // query success handling
    (result) => { return true; },
  ).catch(
    // query error handling
    (e) => {
      var err_desc;
      if (e.code == 'ER_DUP_ENTRY') {
        res.status(http_status.BAD_REQUEST);
        err_desc = 'Email is already registered';
      } else {
        res.status(http_status.INTERNAL_SERVER_ERROR);
        err_desc = 'Unable to create new user';
      }
      res.send({desc: err_desc, error: { code: e.code, msg: e.sqlMessage }});
      return false;
    }
  );
  
  // Stored Procedure: auth_login
  if (user_create_success) {
    await db.stored(
      con, 'auth_login',
      [
        query_data.user_email,
        query_data.user_password
      ]
    ).then(
      // query success handling
      (result) => {
        var select_result = result[0][0];
        res.status(http_status.OK).send({
          token_client_id: select_result.token_client_id,
          token_auth_code: select_result.token_auth_code
        })
      },
    ).catch(
      // query error handling
      (e) => {
        res.send({
          desc: 'Unable to generate login',
          error: { code: e.code, msg: e.sqlMessage }
        });
      }
    )
  }

  // Terminate
  db.close(con);
  if (!res.headersSent) { res.status(http_status.NO_CONTENT).end(); }
}

module.exports = user_create_handler;
