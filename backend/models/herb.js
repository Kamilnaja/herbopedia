const db = require("../db");
const Herb = db.model('Herb', {
   name: { type: String, required: true },
   latinname: { type: String, required: false }
});

module.exports = Herb;