require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes');
const port = process.env.PORT || 8000;

const app = express();
app.use('/api', router);


app.use('/', (req, res) => {
    res.send({
        id:1,
        name: 'Hello world'
    });
});

const start = async () => {
    try {
        await sequelize.sync();
        app.listen(port)
    } catch (err) {
        console.log(err);
    }
}

start();