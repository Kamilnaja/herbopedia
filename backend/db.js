var mongoose = require('mongoose');
var mongodbUrl = "mongodb://kamilnaja:5NZxGiw30S0gXn3Yo9D1@ds149511.mlab.com:49511/kamil_tasklist, [herbs]";
mongoose.connect(mongodbUrl);

var conn = (mongoose.connection);

conn.on('error', console.error.bind(console, 'connection error'));

conn.once('open', function () {

});

module.exports = mongoose;
