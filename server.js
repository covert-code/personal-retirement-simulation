const config = require('./config/config.json')
const express = require('express')
const app = express()
const port = config.express_port

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.post('/postParticipantData', (req, res) => {
    // write to db
    req.body = res.body;
    res.send('OK'); // post 200
})

app.listen(port, () => console.log(
	`Personal Retirement Simulation express server listening on port ${port}!`))
