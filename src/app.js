const stock = require('./route/stock');
const express = require('express');

const app = express();
app.get('/stock/:symbol', stock);

module.exports = app;

