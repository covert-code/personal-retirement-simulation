const bodyParser = require('body-parser');

module.exports = ((app) => {
  // BodyParser
  app.use(bodyParser.json());
});
