let database = 
[
    { id: 1, latitude: 60, longitude: 70 },
    { id: 2, latitude: 40, longitude: 80 },
    { id: 3, latitude: 60, longitude: 60 },
    { id: 77, latitude: 34, longitude: 61 }
];

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
};
