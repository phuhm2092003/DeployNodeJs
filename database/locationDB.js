const database = require('./database')

const getLocations = (callback) => {
    const query = 'SELECT * FROM diadiem'
    database.connection.query(query, function (err, result, fields) {
        if (err) {
            return callback(err, null)
        }
        return callback(null, result)
    });
}

module.exports = {
    getLocations
}