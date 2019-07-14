module.exports = ((app) => {
  app.post('/api/surveys/pd/read', require('./handlers/survey/user-pd-read').handler);
});
