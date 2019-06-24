module.exports = ((app) => {
  app.post('/api/surveys/info', (req, res) => {
    // write to db
    res.status(204).end();
  });

  app.post('/api/surveys/retirement', (req, res) => {
    // write to db
    res.status(204).end();
  });
});
