const express = require('express');
const app = express();

const parkings = require('./parkings.json');

app.get('/parkings', (req, res, next) => {
    res.send(parkings);
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});