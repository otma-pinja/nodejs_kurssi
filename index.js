// empty
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

let database = 
[
    { id: 1, latitude: 60, longitude: 70 },
    { id: 2, latitude: 40, longitude: 80 },
];

var locationsrouter = express.Router()
locationsrouter.get('/', (req, res) => {  res.json(database);  })
locationsrouter.get('/1', (req, res) => {  res.json(database[0]);  })
/*
// Pretty print: create string 
app.get('/api/locations/pretty_json', (req, res) => 
{  
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify(database, null, 4));  
})
*/
app.use('/api/locations', locationsrouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// app.get('/api/locations', (req, res) => {  res.send('fetch all locations')  })
/*
app.use('/hello', (req, res, next) => {
    console.log('hello')
    next()
  })
  app.use('/world', (req, res, next) => {
    console.log('world')
    next()
  })
*/
