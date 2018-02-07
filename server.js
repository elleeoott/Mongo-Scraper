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

//get route to scrape reddit.com/r/soccer

app.get("/scrape", function(req, res) {

    axios.get("https://www.reddit.com/r/soccer/").then(function(response) {

    var $ = cheerio.load(response.data);

    $("a.title").each(function(i, element) {

        var result = {};

        result.title = $(this)
        .children("a")
        .text();
      result.link = $(this)
        .children("a")
        .attr("href");

        db.Article.create(result)
        .then(function(dbArticle) {

            console.log(dbArticle);
        })
        .catch(function(err) {

            return res.json(err);
        });
    });

    res.send("Scrape is complete");
    });
});
