/* Setup
------------------
Basic package and config loading
*/

// Config Files
const config = require('./config/server.json');

// Express
const express = require('express');
const app = express();
const port = config.express_port;


/* Middleware
------------------
Middleware imports for Express application
*/
require('./middleware/body-parser-json.js')(app)
require('./middleware/cors-enable.js')(app)

/* Endpoints
------------------
Specifications for API Endpoints for this server
*/

require('./routes/routes-base.js')(app)
require('./routes/routes-user-auth.js')(app)
require('./routes/routes-surveys.js')(app)

/* Execute
------------------
Server application launch point
*/

app.listen(port, () => console.log(
	'PRS Backend running at port ${port}.'
))
