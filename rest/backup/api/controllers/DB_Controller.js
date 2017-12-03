'use strict';

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require("express");
var configuratons = require("../../config.js");


// ------------------------------------------
// --------> Main variables below <----------

app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ------------------------------------------
// -------> End of Main variables <----------



// ------------------------------------------
// --------> Database set up below <---------

// Moongoose is a DB model creation tool which we'll use shortly after, next line declares the DB and its location
mongoose.Promise = global.Promise; 
mongoose.connect("mongodb://ec2-52-58-37-32.eu-central-1.compute.amazonaws.com/App_DB"); 

// Here we declare the DB connection 
var db = mongoose.connection; 
// Here we declare the schema ( model ) that we'll use for our collections ( tables )   
var customersSchema = mongoose.Schema({
    name: String,
    balance: Number,
    status: Boolean 
}, {
	collection: "customers"
	} ); 
// Here we decclare the schema as a variable which we'll later on use
var Customer = mongoose.model('Customer', customersSchema);

// --------> End of Database set up <---------
// ------------------------------------------



// ------------------------------------------
// ------> Method declarations below <-------

exports.add_customer_to_db = function(req, res){
	newCustomer = ({
		name: req.body.newUserNameForm,
		balance: req.body.newUserBalanceForm,
		status: req.body.Status
	}).save(function(err){
		if (err){
			console.log("Error, couldn't save data: " + err);
			res.status(400).send("unable to save to database");
		}else{
			res.status(200);
		}
	});
};