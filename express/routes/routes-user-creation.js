module.exports = ((app) => {

  app.post('/postCreateUser', (req, res) => {
    // write to db
    res.status(204).end();
  })

  app.post('/postParticipantData', (req, res) => {
      // write to db
      res.status(204).end();
  })

  app.post('/postParticipantSurveyData', (req, res) => {
      // write to db
      res.status(204).end();
  })

});
