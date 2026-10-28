
var express = require('express'),
    morgan = require('morgan'),
    async = require("async"),
    helmet = require("helmet");

var _port = 8082;

var app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.static(__dirname + "/../static"));


console.error("Starting Server.");
app.listen(_port);
