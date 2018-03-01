const express = require('express')
const burger = require('../models/burger.js')

const router = express.Router()

router.get('/', (err, res) => {
    burger.all((data) => {
        console.log('..... refresh .....')
        console.log(data)
        
        res.render("index", {burgers: data});
    })
})

router.post('/api/burgers', function(req, res) {
    //console.log('req.body.name ', req.body)
    burger.create(req.body, function(response) {
        res.json({ id: response.insertId})
    })
})

router.put('/api/burgers/:id', function(req, res) {
    var burgerIdUpdate = req.params.id
    burger.update(burgerIdUpdate, function(result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
    })
})
module.exports = router