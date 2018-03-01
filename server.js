const express = require('express')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const expressHandlebars = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

var PORT = process.env.PORT || 3000;

var app = express();
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes)
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
  