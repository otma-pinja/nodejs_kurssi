// empty
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get('/api/locations', (req, res) => {  res.send('fetch all locations')  })

let database = 
[
    { id: 1, latitude: 60, longitude: 70 },
    { id: 2, latitude: 40, longitude: 80 },
];

app.get('/api/locations', (req, res) => {  res.json(database);  })

app.get('/api/locations/pretty_json', (req, res) => 
{  
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify(database, null, 4));  
})


// Pretty print: create string 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})