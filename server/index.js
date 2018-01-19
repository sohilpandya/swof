require('dotenv').config();
const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

const engineersRoute = require('./routes/engineers')
const shiftRoute = require('./routes/shift')


app.use(bodyParser.json());

app.use('/swof', express.static(path.resolve(__dirname, '../build')));
app.use('/engineers', engineersRoute);
app.use('/shift', shiftRoute);


app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});



module.exports = app;