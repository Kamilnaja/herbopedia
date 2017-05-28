var db = require('../db');
var Herb = db.model('Herb', {
   name: { type: String, required: true },
   latinname: { type: String, required: false }
});

module.exports = Herb;