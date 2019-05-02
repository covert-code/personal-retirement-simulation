/* Setup
------------------
Basic package and config loading
*/

// Config Files
const config = require('./config/server.json');

// Express
const express = require('express');
const app = express();


/* Middleware
------------------
Middleware imports for Express application
*/
require('./middleware/cors-enable.js')(app);
require('./middleware/body-parser-json.js')(app);

/* Endpoints
------------------
Specifications for API Endpoints for this server
*/

require('./routes/routes-base.js')(app);
require('./routes/routes-user-auth.js')(app);
require('./routes/routes-surveys.js')(app);


/* Execute
------------------
Server application launch point
*/

/*
app.listen(config.http_port, () => console.log(
	'PRS Backend running at port ' + config.http_port
))
*/

const http = require('http');
const https = require('https');

const fs = require('fs');
const https_options = {
  key: fs.readFileSync('cert/key.pem', 'utf8'),
  cert: fs.readFileSync('cert/cert.pem', 'utf8'),
  passphrase: 's3cret'
};

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
