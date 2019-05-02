// Config Files
const config = require('../config/server.json');
const secret = require('../config/secret.json');

// Imports
const http = require('http');
const https = require('https');
const fs = require('fs');

const https_options = {
  key: fs.readFileSync('cert/key.pem', 'utf8'),
  cert: fs.readFileSync('cert/cert.pem', 'utf8'),
  passphrase: secret.ssl_password
};

module.exports = ((app) => {
  http.createServer(app)
  .listen(
    config.http_port,
    () => console.log("prs-http: running at port " + config.http_port)
  );

  https.createServer(https_options, app)
  .listen(
    config.https_port,
    () => console.log("prs-https: running at port " + config.https_port)
  );
});
