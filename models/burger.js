const orm = require("../config/orm.js")

var burger = {
    all: (callback) => {
        orm.selectAll("burgers",(response) => {
               callback(response)
        })  
    },

    create: (burgerName, callback) => {
        orm.insertOne("burgers", burgerName, (response) => {
            callback(response)
        })
    },

    update: (burgerId, callback) => {
        var updateBurger = [
            {
                devoured: true
            },
            {
                id: burgerId
            }
        ]
        orm.updateOne("burgers", updateBurger, (response) => {
            callback(response)
        })
    }
}

module.exports = burger