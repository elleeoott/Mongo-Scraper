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

//debugging and body parsing for forms
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

//initialize mongoose to connect through deployed heroku app

//ROUTES    

//get route to scrape BBC site

app.get("/scrape", function(req, res) {

    axios.get("http://www.bbc.com/sport/football").then(function(response) {

    var $ = cheerio.load(response.data);

    $("p.title").each(function(i, element) {

        var result = {};

    });

    });
});
