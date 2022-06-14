import express from 'express';
import bodyParser from 'body-parser';
import database from '../services/Database.js';
import Controller from '../services/Controller.js';
import 'dotenv/config.js';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/**
 * Sync with database
 */
try {
    database.sync();
    console.log('Connection has benn established sucessfully')
} catch (error) {
    console.log('Unable to connect to the database')
}


/**
 * Unique route for api
 * 
 * @param {json}
 * @returns {json}
 */
app.get('/', async (req, res) => {
    const controller = new Controller(req.body.action)
    controller.setController(req.body.action.controller)
    controller.setMethod(req.body.action.method, req.body.action.params)
    const result = await controller.callMethod()

    res.send({
        response: result
    });
})

/** 
 * Initialize the server on the port defined in the .env
 */
app.listen(process.env.PORT, () => console.log('Server listening on port ' + process.env.PORT));