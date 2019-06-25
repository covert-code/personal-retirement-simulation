const db = require('../../../modules/db/mysql-connect');
const crypto = require('../../../modules/crypto/bcrypt');
const http_status = require('http-status-codes');

async function user_delete_handler(req, res) {
  // Credential Structure
  var user_credentials = {
    user_email: req.body.user_email,
    password: {
      client_plaintext: req.body.user_password
    }
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

  // Stored Procedure: auth_salt
  user_credentials.password.salt = await db.stored(
    con, 'auth_salt',
    [ user_credentials.user_email ]
  ).then(
    // query success handling
    (result) => {
      if (result[0].length == 0) {
        // query result empty
        res.status(http_status.BAD_REQUEST);
        res.send({desc: 'Username or password is incorrect'})
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
      res.status(http_status.INTERNAL_SERVER_ERROR).send({
        desc: 'Unable to fetch salt',
        error: { code: e.code, msg: e.sqlMessage }
      });
    }
  )
  // Terminate if salt is not found (fatal)
  if (user_credentials.password.salt == null) { db.close(con); return; }

  
  // Generate Hash
  try {
    user_credentials.password.hash = await crypto.hash_gen_salty(
      user_credentials.password.client_plaintext,
      user_credentials.password.salt
    )
  }
  catch (e) {
    res.status(http_status.INTERNAL_SERVER_ERROR).send(
      { desc:'Unable to generate password hash', error: e }
    );
    return;
  }

  // Stored Procedure: user_delete
  await db.stored(
    con, 'user_delete',
    [
      user_credentials.user_email,
      user_credentials.password.hash
    ]
  ).then(
    // query success handling
    (result) => {
      if (result.affectedRows > 0) {
        res.status(http_status.OK).end();
      } else {
        res.status(http_status.BAD_REQUEST);
        res.send({desc: 'Unable to delete user'});
      }
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

  // Terminate
  db.close(con);
  if (!res.headersSent) { res.status(http_status.NO_CONTENT).end(); }
}

module.exports.handler = user_delete_handler;
