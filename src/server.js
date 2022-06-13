import express from 'express';
import bodyParser from 'body-parser';
import Controller from '../services/Controller.js';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    console.log(req.body)
    const controller = new Controller(req.body.action)

    const result = controller.callMethod()

    res.send(result);
})

// Initialize server on port 3000
app.listen(3000, () => console.log('Server listening on port 3000'));