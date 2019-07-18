module.exports = ((app) => {
  /* Endpoint to fetch the user participant data survey */
  app.post('/api/surveys/pd/read', require('./handlers/survey/user-pd-read').handler);

  /* Endpoint to fetch the user retirement survey */
  app.post('/api/surveys/rt/read', require('./handlers/survey/user-rt-read').handler);
});
