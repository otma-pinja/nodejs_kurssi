const express = require('express');
let locations_router = require('./routes/locations.js');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.json());

app.use('/api/locations', locations_router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
