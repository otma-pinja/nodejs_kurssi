let database = 
[
    { id: 1, latitude: 60, longitude: 70 },
    { id: 2, latitude: 40, longitude: 80 },
    { id: 3, latitude: 60, longitude: 60 },
    { id: 55555, latitude: 55, longitude: 55 }
];
let running_id = 4;

module.exports = 
{
    find_all: () => { return database; },
    find_by_Id: (in_id) => 
        {  return database.find((item) => item.id === in_id);  },
    delete_by_Id: (in_id) => 
    {
        let new_db = database.filter((item) => item.id != in_id);
        if (new_db.length != database.length)
        {
            database = new_db;
            return true;
        }
        else
            { return false; }
    },
    add_new_location: (data) =>
    {
        data.id = running_id++;
        database.push(data);
        return data;
    }
};
