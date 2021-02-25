const express = require('express');
const database = require("../database/crudrepository.js");

const locationsrouter = express.Router();

locationsrouter.get('/', (req, res) => {  res.json(database.find_all());  });
locationsrouter.get('/:id([0-9]+)', (req, res) => 
    {  
        let item = database.find_by_Id(req.params.id);
        console.log(item);
        if (item)
            {  res.json(item);  }
        else 
            {  res.status(404);  res.end();  } 
            // {  res.status(404).send();  }
    });
// ToDo
    locationsrouter.delete('/:id([0-9]+)', (req, res) => 
    {  database.delete_by_Id(req.params.id) });

module.exports = locationsrouter;

/*
// Pretty print: create string 
app.get('/api/locations/pretty_json', (req, res) => 
{  
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify(database, null, 4));  
})
*/