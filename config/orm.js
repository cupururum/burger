const connection = require("../config/connection.js");

const orm = {
    selectAll: (tableName, callback) => {
        var query = "SELECT * FROM " + tableName
        connection.query(query, (err, data) => {
            if (err) throw err;
            callback(data)
        })
    },

    insertOne: (tableName, newItem, callback) => {
        var query = "INSERT INTO " + tableName + " SET ?"
        connection.query(query, newItem, (err, data) => {
            if (err) throw err;

            callback(data)
        })
    },

    updateOne: (tableName, updateItem, callback) => {
        var query = "UPDATE " + tableName + " SET ? WHERE ?"
        connection.query(query, updateItem, (err, data) => {
            if (err) throw err;

            callback(data)
        })
    }
}

module.exports = orm