module.exports = ((app) => {
  /* Endpoint to check the validity of an email/password combination. */
  app.post('/api/auth/login', require('./handlers/user-auth/user-login'));

  /* Endpoint to check whether a user exists or not. */
  app.post('/api/auth/logout', require('./handlers/user-auth/user-logout'));

  /* Endpoint to register a new user. */
  app.post('/api/auth/register/new', require('./handlers/user-auth/user-create'));
});
