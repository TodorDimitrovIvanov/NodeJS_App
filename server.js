var express = require("express");
var fs = require("fs");
var path = require('path');
var config = require('./config.js');
var db = require('./api/controllers/DB_connection.js');
var port = 8080; 

app = express();


// -------------------------------------------------
// --------> Old and usesless? code below <---------

//Task = require('./api/models/Model.js'), // This line connects the server with the Model of our DB
//bodyParser = require('body-parser'); // This module parses incoming requests and separates them 


//mongoose.Promise = global.Promise; // This line sets a global MongoDB instance
//mongoose.connect("mongodb://ec2-52-58-37-32.eu-central-1.compute.amazonaws.com/App_DB"); // This line configures the server to load the newDB Database  

//app.use(bodyParser.urlencoded({ extended: true })); // This line defines the bodyParser, which populates the req.body with POST paramertes from  the page. If there's no body, it will populate it with {} or an error message
//app.use(bodyParser.json()); // This line does something? 

//mongoose = require('mongoose'); // This line requests the MongoDB module 

// --------> Old and usesless? code above <---------
// -------------------------------------------------




// -----------------------------------------------
// --------> App Routing Settings below <---------

var routes = require('./api/routes/Routes.js'); // This line imports our Routes.js file and its methods
routes(app); // Registers the Routes in the web-server
app.use('/static', express.static('static')); // This line tells the server to look for static ( media ) content in the "views" folder ( source )
app.use('/html', express.static('html'));

db.connect("mongodb://127.0.0.1:1337/App_DB", function(){
	if (err){
		console.log("Unable to connect to DB!");
		process.exit(1);
	}else {
		console.log("Successfully connected to DB!");
	}
});

// --------> App Routing Settings above <---------
// -----------------------------------------------



app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + "  wasn't found"})
});

app.listen(port);

//console.log('todo list RESTful API server started on: ' + port );

