var express = require('express');
var app = express ();

app.get('/', function(req, res) {
    var number = 200;
    res.status(number).send("hello World");
});

app.listen(3000);