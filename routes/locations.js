const express = require('express')

let database = 
[
    { id: 1, latitude: 60, longitude: 70 },
    { id: 2, latitude: 40, longitude: 80 },
    { id: 3, latitude: 60, longitude: 60 },
];

var locationsrouter = express.Router()
locationsrouter.get('/', (req, res) => {  res.json(database);  })
locationsrouter.get('/1', (req, res) => {  res.json(database[0]);  })

module.exports = locationsrouter;

/*
// Pretty print: create string 
app.get('/api/locations/pretty_json', (req, res) => 
{  
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify(database, null, 4));  
})
*/