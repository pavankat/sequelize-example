var express = require("express");
var app = express();
var port = 3000;

var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var Band = require('./models/band.js');

console.log(Band);

app.get("/", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!

  Band.findAll({}).then(function(results) {
    res.render("index", {
    	bands: results,
    });
  }).catch(function(err){
    console.log(err);
  });  
});

app.get("/new", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!
  res.render("new");
});

app.post("/newBand", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!
  Band.create({
    name: req.body.band
  }).then(function(results) {
    // `results` here would be the newly created chirp
    res.redirect('/');
  });
});

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});