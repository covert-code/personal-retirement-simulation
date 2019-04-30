var dbc = require('../modules/db-connect');

module.exports = ((app) => {

  app.post('/getUserExists', (req, res) => {
    var email = req.body.user_email;

    var con = dbc.open(); if (con == null) { return; }

    dbc.stored(con, 'exists_user', ['jane.doe@gmail.com'],
      (results, fields) => {
        if (results[0][0][fields[0][0].name] == 0) {
          res.json({'user_email': email, 'exists': true});
        } else {
          res.json({'user_email': email, 'exists': false});
        }
      }
    );

    dbc.close(con);
  })

  app.post('/postCreateUser', (req, res) => {
    // write to db
    res.status(204).end();
  });

  app.post('/postParticipantData', (req, res) => {
    // write to db
    res.status(204).end();
  });

  app.post('/postParticipantSurveyData', (req, res) => {
    // write to db
    res.status(204).end();
  });

});
