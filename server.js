//core dependencies

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//dependencies in charge of scraping the information itself
var axios = require("axios");
var cheerio = require("cheerio");

// var db = require("./models");

var PORT = 3000;

//start up express

var app = express();

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

//debugging and body parsing for forms
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));


//ROUTES    

//get route to scrape site

app.get("/scrape", function(req, res) {

    axios.get("https://www.reddit.com/r/soccer/").then(function(response) {

    var $ = cheerio.load(response.data);
    var results = {};

    $("p.title").each(function(i, element) {

        //text of titles are stored
        var result = {};
        var title = $(element).text();

    });

    });
});

//trying out ES6

app.listen(PORT, () => console.log(`Listening on " + ${PORT}`));
