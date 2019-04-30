// Config Files
const config = require('./config/server.json')

// Express
const express = require('express')
const port = config.express_port

// Imports

// Cross-Origin Resource Sharing
const cors = require('cors')
var corsOptions = {
	origin: true,
	optionsSuccessStatus: 200
}

// Setup
const app = express()
app.use(cors(corsOptions))

// Endpoints
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

// Execute
app.listen(port, () => console.log(
	`Personal Retirement Simulation express server listening on port ${port}!`
))
