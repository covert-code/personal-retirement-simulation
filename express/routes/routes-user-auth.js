var dbc = require('../modules/db-connect');

module.exports = ((app) => {
  
  app.post('/api/auth/login', (req, res) => {
    // write to db
    res.status(204).end();
  });

  /* Endpoint to check whether a user exists or not. */
  app.post('/api/auth/register/taken', (req, res) => {
    var email = req.body.user_email;

    // Attempt DB Connection
    var con = dbc.open();
    if (con == null) {
      res.status(500).end('Database connection failed.');
      return;
    }

    // Request Body Logic
    dbc.stored(con, 'exists_user', [email],
      (results, fields) => {
        if (results[0][0][fields[0][0].name] == 0) {
          res.json({'user_email': email, 'exists': false});
        } else {
          res.json({'user_email': email, 'exists': true});
        }
      }
    );

    // Terminus
    dbc.close(con);
  });

  app.post('/api/auth/register/new', (req, res) => {
    // Attempt DB Connection
    var con = dbc.open();
    if (con == null) {
      res.status(500).end('Database connection failed.');
      return;
    }

    // Request Body Logic
    dbc.stored(
      con, 'create_user',
      [
        req.body.user_email,
        req.body.user_password,
        req.body.user_title,
        req.body.user_fname,
        req.body.user_initial,
        req.body.user_lname
      ],
      (results, fields) => {
        console.log(results);
        res.json({'success': true});
      }
    );

    // Terminus
    dbc.close(con);
  });
});
