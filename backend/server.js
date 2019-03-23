const express = require('express');
const bodyParser = require('body-parser');
const Herb = require('./models/herb');
const path = require("path");
const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

// app.get('/api/herbs', function (req, res, next) {
//   Herb.find((err, herbs) => {
//     if (err) {
//       return next(err)
//     }
//     res.json(herbs)
//   });
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// app.post('/api/herbs', (req, res, next) => {
//   var herb = new Herb({
//     name: req.body.name,
//     latinname: req.body.latinname
//   });
//   herb.save((err, herb) => {
//     if (err) {
//       return next(err)
//     }
//     //user can get data in json format
//     res.json(201, herb)
//   });
// });

app.listen(port, () => {
  console.log('listen on ' + port);
});
