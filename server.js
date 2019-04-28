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


const app = express()

// Endpoints
app.get('/', (req, res) => {
	res.send('Hello World')
})

app.post('/postParticipantData', (req, res) => {
    // write to db
    req.body = res.body;
    res.send('OK'); // post 200
})

// Execute
app.use(cors(corsOptions))
app.listen(port, () => console.log(
	`Personal Retirement Simulation express server listening on port ${port}!`
))
