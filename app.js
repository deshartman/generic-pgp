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
    let payment = {
        "charge_id": "ch_a9dc6297cd1a4fb095e61b1a9cf2dd1d",
        "error_code": null,
        "error_message": null
    };
    console.log(`Got request, responding with: ${JSON.stringify(payment, null, 4)}`);
    res.send(payment);
})

app.post('/tokenize', (req, res) => {
    let token = {
        "token_id": "tk_a9dc6297cd1a4fb095e61b1a9cf2dd1d",
        "error_code": null,
        "error_message": null
    };
    console.log(`Got request, responding with: ${JSON.stringify(token, null, 4)}`);
    res.send(token);
})

app.post('/statuscallback', (req, res) => {
    console.log('statuscallback POST');
    console.log(req)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})