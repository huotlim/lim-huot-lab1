const express = require('express');
const app = express();
app.get('/', (req, res) => {
 res.send('"tesing for first time');
});
module.exports = app;
