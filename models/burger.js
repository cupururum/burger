const orm = require("../config/orm.js")

var burger = {
    all: (callback) => {
        orm.selectAll((response) => {
               callback(response)
        })  
    },

    create: (burgerName, callback) => {
        orm.insertOne(burgerName, (response) => {
            callback(response)
        })
    },

    update: (burgerId, callback) => {
        orm.updateOne(burgerId, (response) => {
            callback(response)
        })
    }
}

module.exports = burger