const config_bcrypt = require('../config/bcrypt.json');

const dbc = require('../modules/db-connect');
const bcrypt = require('bcrypt');

module.exports = ((app) => {
  /* Endpoint to check the validity of an email/password combination. */
  app.post('/api/auth/login', (req, res) => {
    var login_data = req.body

    // Attempt DB Connection
    var con = dbc.open();
    if (con == null) {
      res.status(500).end('Database connection failed.');
      return;
    }

    // Request Body Logic
    dbc.stored(con, 'user_get_password',
      [
        login_data.user_email
      ],
      (results, fields) => {
        // JSON reply body
        var user_login_response = {}

        // Get DB record reply
        var db_reply = results[0];
        if (db_reply.length == 0) {
          // user does not exist, as record was not obtained
          user_login_response.success = false;

          // we can terminate without proceeding with check
          res.json(user_login_response);
          reply;
        }

        // if user exists, we need to check:
        var db_pw_hash = db_reply[0].user_password;

        bcrypt.compare(
          login_data.user_password,
          db_pw_hash,
          // Listener for BCrypt comparator result
          (err, result) => {
            // set success value
            user_login_response.success = result;

            // reply with JSON
            res.json(user_login_response);
          }
        );
      }
    );

    // Terminus
    dbc.close(con);
  });

  /* Endpoint to check whether a user exists or not. */
  app.post('/api/auth/register/taken', (req, res) => {
    var user_unavailable_query = req.body;

    // Attempt DB Connection
    var con = dbc.open();
    if (con == null) {
      res.status(500).end('Database connection failed.');
      return;
    }

    // Request Body Logic
    dbc.stored(con, 'user_exists_validate',
      [
        user_unavailable_query.user_email
      ],
      (results, fields) => {
        // JSON reply body
        var user_unavailable_response = {
          'user_email': user_unavailable_query.user_email,
        }

        // set field: exists
        user_unavailable_query.exists = (results[0][0]['p_user_exists'] == 1);

        // reply with JSON
        res.json(user_unavailable_query);
      }
    );

    // Terminus
    dbc.close(con);
  });

  /* Endpoint to register a new user. */
  app.post('/api/auth/register/new', (req, res) => {
    var user_registration_query = req.body;

    // Request Body Logic

    // start by bcrypt-hashing the password
    bcrypt.hash(
      user_registration_query.user_password,
      config_bcrypt.rounds,
      (err, hash) => {

        // Attempt DB Connection
        var con = dbc.open();
        if (con == null) {
          res.status(500).end('Database connection failed.');
          return;
        }

        // store in db
        dbc.stored(
          con, 'user_create',
          [
            user_registration_query.user_email,
            hash,
            user_registration_query.user_title,
            user_registration_query.user_fname,
            user_registration_query.user_initial,
            user_registration_query.user_lname
          ],
          (results, fields) => {
            // JSON reply body
            var user_registration_response = {};

            // set fields: success
            user_registration_response.success = (results.affectedRows == 1);

            // reply with JSON
            res.json(user_registration_response);
          }
        )


        // Inner Terminus
        dbc.close(con);
      }
    );
    // Outer Terminus
  });
});
