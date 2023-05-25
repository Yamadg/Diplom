require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const models = require('./models/models');
const router = require('./routes');
const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

/* app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
 });
 */
const start = async () => {
    try {
        await sequelize.sync();
        app.listen(port)
    } catch (err) {
        console.log(err);
    }
}

start();