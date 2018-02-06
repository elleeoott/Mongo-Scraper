//core dependencies

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//dependencies in charge of scraping the information itself
var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");

var PORT = 3000;

//start up express

var app = express();