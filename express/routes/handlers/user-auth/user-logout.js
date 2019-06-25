const db = require('../../../modules/db/mysql-connect');
const crypto = require('../../../modules/crypto/bcrypt');
const http_status = require('http-status-codes');

async function user_logout_handler(req, res) {
  // Credential Structure
  var user_credentials = {
    client: {
      id: req.body.client.id,
      auth: req.body.client.auth
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

  // Stored Procedure: auth_logout
  await db.stored(
    con, 'auth_logout',
    [
      user_credentials.client.id,
      user_credentials.client.auth
    ]
  ).then(
    // query success handling
    (result) => {
      if (result.affectedRows > 0) {
        res.status(http_status.OK).end();
      } else {
        res.status(http_status.BAD_REQUEST);
        res.send({desc: 'Bad or expired client credentials'});
      }
    },
  ).catch(
    // query error handling
    (e) => {
      res.send({
        desc: 'Unable to safely logout client',
        error: { code: e.code, msg: e.sqlMessage }
      });
    }
  )

  // Terminate
  db.close(con);
  if (!res.headersSent) { res.status(http_status.NO_CONTENT).end(); }
}

module.exports.handler = user_logout_handler;
