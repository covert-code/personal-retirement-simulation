/* Setup
------------------
Basic package and config loading
*/

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
require('./modules/server-launch.js')(app);
