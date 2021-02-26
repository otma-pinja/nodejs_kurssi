const express = require('express');
let locations_router = require('./routes/locations.js');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.json());

const validate_coords = (data) =>
{
    if (!data)
        {  return false;  }
    if (!'latitude' in data || !'longitude' in data )
        {  return false;  }
    if (isNaN(Number(data.latitude)) || isNaN(Number(data.longitude)))
        {  return false;  }
    if ((data.latitude < -90) || (data.latitude > 90) || 
        (data.longitude < -180 || (data.longitude > 180)))
        {  return false;  }
    return true;
}

app.use("/", (req, res, next) => 
{
    if (req.method == 'POST')
    {
        // console.log(req.body);
        // console.log(typeof(req.body));
        if (validate_coords(req.body)) 
            {  next();  }
        else 
            {  res.status(400); res.end();  }
    }
    else
        {  next();  }
});

app.use('/api/locations', locations_router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
