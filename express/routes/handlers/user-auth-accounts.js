const db = require('../../modules/db/mysql-connect');
const crypto = require('../../modules/crypto/bcrypt');
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
  }

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
  var user_create_success = true;
  var user_create_result = await db.stored(con, 'user_create',
    [
      query_data.user_email,
      query_data.user_password,
      ...query_data.user_name // unpacking
    ],
  ).catch((e) => {
    // query error handling
    switch (e.code) {
      case 'ER_DUP_ENTRY':
        res.status(http_status.BAD_REQUEST).send(
          { desc:'User already exists', error: { code: e.code, msg: e.sqlMessage } }
        );
        break;
      default:
        res.status(http_status.INTERNAL_SERVER_ERROR).send(
          { desc: 'Unable to create new user', error: { code: e.code, msg: e.sqlMessage } }
        );
        break;
    }
    user_create_success = false;
  });
  // successful if no errors and we've actually created a row
  user_create_success = user_create_success
    && user_create_result && user_create_result.affectedRows == 1;

  // upon success
  if (user_create_success) {
    // attempt login
    var login_result = await db.stored(con, 'auth_login',
      [query_data.user_email, query_data.user_password]
    );
    console.log(login_result);
  }

  // Terminate
  db.close(con);
  if (!res.headersSent) { res.status(http_status.NO_CONTENT).end(); }
}

module.exports.user_create = user_create_handler;
