const connection = require("../config/connection.js");

const orm = {
    selectAll: (tableName, callback) => {
        var query = "SELECT * FROM " + tableName
        connection.query(query, (err, data) => {
            if (err) throw err;
            callback(data)
        })
    },

    insertOne: (tableName, newBurger, callback) => {
        var query = "INSERT INTO " + tableName + " SET ?"
        connection.query(query, newBurger, (err, data) => {
            if (err) throw err;

            callback(data)
        })
    },

    updateOne: (tableName, udateBurger, callback) => {
        var query = "UPDATE " + tableName + " SET ? WHERE ?"
        connection.query(query, [
            {
                devoured: true
            },
            {
                id: udateBurger
            }
        ], (err, data) => {
            if (err) throw err;

            callback(data)
        })
    }
}

module.exports = orm