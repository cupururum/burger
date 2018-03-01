const connection = require("../config/connection.js");

const orm = {
    selectAll: (callback) => {
        connection.query("SELECT * FROM burgers", (err, data) => {
            if (err) throw err;
            callback(data)
        })
    },

    insertOne: (newBurger, callback) => {
        connection.query("INSERT INTO burgers SET ?", newBurger, (err, data) => {
            if (err) throw err;

            callback(data)
        })
    },

    updateOne: (udateBurger, callback) => {
        
        connection.query("UPDATE burgers SET ? WHERE ?", [
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