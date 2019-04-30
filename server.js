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

// BodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Cross-Origin Resource Sharing
const cors = require('cors');
var corsOptions = {
	origin: true,
	optionsSuccessStatus: 200
}
app.use(cors(corsOptions));


/* Endpoints
------------------
Specifications for API Endpoints for this server
*/

app.get('/', (req, res) => {
	res.send('Server Running')
})

app.post('/postCreateUser', (req, res) => {
    // write to db
    res.status(204).end();
})

app.post('/postParticipantData', (req, res) => {
    // write to db
    res.status(204).end();
})

app.post('/postParticipantSurveyData', (req, res) => {
    // write to db
    res.status(204).end();
})


/* Execute
------------------
Server application launch point
*/

app.listen(port, () => console.log(
	`Personal Retirement Simulation express server listening on port ${port}!`
))
