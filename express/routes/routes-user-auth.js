module.exports = ((app) => {
  /* Endpoint to check the validity of an email/password combination. */
  app.post('/api/auth/login', require('./handlers/user-auth/user-login').handler);

  /* Endpoint to check whether a user exists or not. */
  app.post('/api/auth/logout', require('./handlers/user-auth/user-logout').handler);

  /* Endpoint to read user profile. */
  app.post('/api/auth/profile', require('./handlers/user-auth/user-read').handler);

  /* Endpoint to update user name */
  app.post('/api/auth/profile/update-name', require('./handlers/user-auth/user-update-name').handler);

  /* Endpoint to update user email */
  app.post('/api/auth/profile/update-email', require('./handlers/user-auth/user-update-email').handler);

  /* Endpoint to update user password */
  app.post('/api/auth/profile/update-password', require('./handlers/user-auth/user-update-password').handler);

  /* Endpoint to register a new user. */
  app.post('/api/auth/register/new', require('./handlers/user-auth/user-create').handler);

  /* Endpoint to delete a user */
  app.post('/api/auth/delete', require('./handlers/user-auth/user-delete').handler);
});
