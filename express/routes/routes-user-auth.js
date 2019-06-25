module.exports = ((app) => {
  /* Endpoint to check the validity of an email/password combination. */
  app.post('/api/auth/login', (req, res) => {
    res.status(204).end();
  });

  /* Endpoint to check whether a user exists or not. */
  app.post('/api/auth/register/taken', (req, res) => {
    res.status(204).end();
  });

  /* Endpoint to register a new user. */
  app.post('/api/auth/register/new', require('./handlers/user-auth/user-create'));
});
