const express = require('express');
const herbs = require('./db');
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.get('/api/herbs', (req, res) => {
  return res.json(herbs)
})

app.listen(port, () => console.log("app listening on port " + port))
