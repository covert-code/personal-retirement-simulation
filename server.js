const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/postParticipantData', (req, res) => {
    // write to db
    req.body = res.body;
    res.send('OK'); // post 200
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
