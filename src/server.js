const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my backend');
})

app.get('/teste/:params', (req, res) => {
    res.send(req.params)
})

app.listen(3000, () => console.log('Server listening on port 3000'));
