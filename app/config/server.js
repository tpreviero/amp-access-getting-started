"use strict";

var express = require('express');
var app = express();

var SERVER_PORT = 3000;

app.listen(SERVER_PORT, function() {
    console.log('Server ON, listening port ' + SERVER_PORT);
});

module.exports = app;