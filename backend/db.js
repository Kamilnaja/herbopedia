const Herb = require('./models/herb');

// create herb json from herb objects
const herb1 = new Herb('Rumianek', 'Matricaria chamomilla');
const herb2 = new Herb('Len zwyczajny', 'Linum usitassum');
const herb3 = new Herb('Łopian zwyczajny', 'Arctum Lappa');
const herb4 = new Herb('Pokrzywa zwyczajna', 'Urtica dioica')
const herbs = [];

herbs.push(herb1);
herbs.push(herb2);
herbs.push(herb3);
herbs.push(herb4);

module.exports = herbs;
