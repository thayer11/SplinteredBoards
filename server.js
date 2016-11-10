'use strict'

var express    = require('express');
var app        = express();
var port       = process.env.PORT || 3000;
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static('./front_end/public')); //this serves up the public folder into the root directory

// app.get('/', function(req, res) { //since we’re doing the app.use express static above, this doesn’t do anything, so that’s why I’ve commented it out.  Serving up the index.html into the root folder means that’s going to default to what is shown at the root url
// res.send("You're Home!");
// });

//database
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/SplinteredBoards");

// start server
app.listen(port, function() {
  console.log('Server started on', port); 
});


//routes setup

var routes = require('./back-end/routes/routes');
app.use(routes);



