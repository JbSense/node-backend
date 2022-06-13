import express from 'express';
import bodyParser from 'body-parser';
import database from '../services/Database.js';
import Controller from '../services/Controller.js';
import 'dotenv/config.js';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// Connect to the database
// database.authenticate().then(() => {
//     console.log('Connection has benn established sucessfully')
// }).catch(error => {
//     console.log('Unable to connect to the database')
// })

/**
 * Sync with database
 */
async function connect() {
    try {
        await database.sync();
        console.log('-----------------------------------')
        console.log('Connection has benn established sucessfully')
    } catch (error) {
        console.log('-----------------------------------')
        console.log('Unable to connect to the database')
        console.log(error);
    }
};

/**
 * Unique route for api
 * 
 * @param {json}
 * @returns {json}
 */
app.get('/', (req, res) => {
    connect()
    const controller = new Controller(req.body.action)

    res.send({ 
        data: controller.callMethod()
    });
})

/** 
 * Initialize the server on the port defined in the .env
 */
app.listen(process.env.PORT, () => console.log('Server listening on port ' + process.env.PORT));