var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var path = require('path');

var app = express();

var routes = require('./routes');

var port = 6000;

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));
var server = http.createServer(app);
var connectionUri = "mongodb://test:test@localhost:27017/nodetest1?readPreference=primary";
mongoose.connect(connectionUri);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('disconnected', console.log);
db.once("open", console.log);

server.listen(port);