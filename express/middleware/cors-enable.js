const cors = require('cors');

module.exports = ((app) => {
  // Cross-Origin Resource Sharing
  var corsOptions = {
    origin: true,
    optionsSuccessStatus: 200
  }
  app.use(cors(corsOptions));
});
