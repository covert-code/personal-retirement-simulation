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
    dbc.stored(con, 'exists_user', ['jane.doe@gmail.com'],
      (results, fields) => {
        if (results[0][0][fields[0][0].name] == 0) {
          res.json({'user_email': email, 'exists': true});
        } else {
          res.json({'user_email': email, 'exists': false});
        }
      }
    );

    // Terminus
    dbc.close(con);
  });

  app.post('/api/auth/register/new', (req, res) => {
    // write to db
    res.status(204).end();
  });
});
