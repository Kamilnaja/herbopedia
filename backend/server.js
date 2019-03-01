const express = require('express');
const bodyParser = require('body-parser');
const Herb = require('./models/herb');
const path = require("path");
const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/herbs', function (req, res, next) {
    Herb.find(function (err, herbs) {
        if (err) {
            return next(err)
        }
        res.json(herbs)
    });
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.post('/api/herbs', function (req, res, next) {
    var herb = new Herb({
        name: req.body.name,
        latinname: req.body.latinname
    });
    herb.save(function (err, herb) {
        if (err) {
            return next(err)
        }
        //user can get data in json format
        res.json(201, herb)
    });
});

app.listen(port, function () {
    console.log('listen on ' + port);
});
