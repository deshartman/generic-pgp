const express = require('express')
const basicAuth = require('express-basic-auth')
const app = express()
const port = 3000

// app.use(basicAuth({
//     users: { 'foo': 'bar' },
//     challenge: false,
// }));

app.get('/', (req, res) => {
    res.send('Custom Payment Gateway Proxy')
})

app.post('/charge', (req, res) => {
    console.log('Got request');
    res.send({
        "charge_id": "ch_a9dc6297cd1a4fb095e61b1a9cf2dd1d",
        "error_code": null,
        "error_message": null
    });
})

app.post('/tokenize', (req, res) => {
    console.log('Got request');
    res.send({
        "token_id": "tk_a9dc6297cd1a4fb095e61b1a9cf2dd1d",
        "error_code": null,
        "error_message": null
    });
})

app.post('/statuscallback', (req, res) => {
    console.log('statuscallback POST');
    console.log(req)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})