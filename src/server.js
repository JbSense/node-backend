import express from 'express';
import bodyParser from 'body-parser';
import Controller from '../services/Controller.js';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/**
 * Unique route for api
 * 
 * @param {json}
 * @returns {json}
 */
app.get('/', (req, res) => {
    const controller = new Controller(req.body.action)

    res.send({ 
        data: controller.callMethod()
    });
})

// Initialize server on port 3000
app.listen(3000, () => console.log('Server listening on port 3000'));