module.exports = ((app) => {
  /* Endpoint to check the validity of an email/password combination. */
  app.post('/api/auth/login', (req, res) => {
    // write to db
    res.status(204).end();
  });

  /* Endpoint to check whether a user exists or not. */
  app.post('/api/auth/register/taken', (req, res) => {
    // write to db
    res.status(204).end();
  });

  /* Endpoint to register a new user. */
  app.post('/api/auth/register/new', (req, res) => {
    // write to db
    res.status(204).end();
  });
});
