var express = require('express');
var bodyParser = require('body-parser');
var Herb = require('./models/herb');
var path = require("path");

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

//check is data was properly readed

//get Post model

app.get('/api/herbs', function (req, res, next) {
    Herb.find(function(err, herbs) {
        if (err) {
            return next (err)
        }
        res.json(herbs)
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})


app.post('/api/herbs', function (req, res, next) {
    var herb = new Herb ({
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



app.listen(3000, function () {
   console.log('listen on ' + 3000);
});
