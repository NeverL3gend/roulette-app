// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
<<<<<<< HEAD
var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');
var passport = require('passport');
// var flash    = require('connect-flash');
=======
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
>>>>>>> upstream/master

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
// go to config folder, find database.js (exports an object with username and pw for database)
var configDB = require('./config/database.js');

<<<<<<< HEAD
var db

// configuration ===============================================================
//connects to database, returns database
mongoose.connect(configDB.url, { useNewUrlParser: true }, (err, database) => {
=======

// configuration ===============================================================
//connects to database, returns database
mongoose.connect(configDB.url, { useMongoClient: true }, (err, database) => {
>>>>>>> upstream/master
  if (err) return console.log(err)
  db = database
  // function call from app/routes, app(express), passport(login), and db are arguments
  require('./app/routes.js')(app, passport, db);
}); // connect to our database


// function call
require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')) // no longer need individual routes for client side files

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
<<<<<<< HEAD
    secret: 'geakdat1ng', // session secret, enables you keep a logged in user
=======
    secret: 'rcbootcamp2018a', // session secret, enables you keep a logged in user
>>>>>>> upstream/master
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
<<<<<<< HEAD
=======
app.use(flash()); // use connect-flash for flash messages stored in session
>>>>>>> upstream/master


// routes ======================================================================
//require('./app/routes.js')(app, passport, db); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
<<<<<<< HEAD
console.log('The magic happens on port ' + port);
=======
console.log('Server ready to be accessed' + port);
>>>>>>> upstream/master
