'use strict';


// ------------------------------------------
// --------> Main variables below <----------

var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var bodyParser = require('body-parser');
var express = require("express");
var configuratons = require("../../config.js");
var db = require("./DB_connection.js");

app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// -------> End of Main variables <----------
// ------------------------------------------




// Deprecated mongoose code below 

/*
// Moongoose is a DB model creation tool which we'll use shortly after, next line declares the DB and its location
mongoose.Promise = global.Promise; 
mongoose.connect(db_route);

// Here we declare the DB connection 
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.on('disconnected', function () {
   //Reconnect on timeout
   mongoose.connect(config.mongoUrl);
   db = mongoose.connection;
});
db.once("open", function(callback) {
    console.log("Connection succeeded.");
});

// Here we declare the schema ( model ) that we'll use for our collections ( tables )   
// BACKUP - var customersSchema = mongoose.Schema;
// Here we decclare the schema as a variable which we'll later on use
var customersSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: String,
    balance: Number,
    status: Boolean 
}, {
	collection: "customers"
	});
// Here we delcare the Model for the Schema
var customerModel = mongoose.model('Customer', customersSchema);
*/



// ------------------------------------------
// ------> Method declarations below <-------

/*exports.add_customer_to_db = function(req, res){
	// BACKUP - customer = mongoose.model('Customer');
	var newCustomer = new customerModel({
		_id: 'entityId',
		name: req.body.newUserNameForm,
		balance: req.body.newUserBalanceForm,
		status: req.body.Status
	},{
		collection: "customers"
	});
	/*newCustomer.save(function(err){
		if (err){
			console.log("Error, couldn't save data: " + err);
			res.status(400).send("Unable to save to database");
		}else{
			res.status(200);
		}
	}); 
	customersSchema.pre('save', function(next,done){
		var error = new Error("Something is wrong!");
		next(error);
		setTimeout(done, 100);
	});
	newCustomer.save(function(err){
			if (err){
				console.log("Error, couldn't save data: " + err);
				res.status(400).send("Unable to save to database");
			}else{
				res.status(200);
			}
		});

};*/

exports.list_all_customers = function(req, res){
	var collection = db.get().collection('customers');
	collection.find().toArray(function(err, results){
		console.dir(results);
		db.close();

		// Here we must learn how to send a json object with the http response 
	});
}

exports.add_customer_to_db = function(req, res){
	var collection = db.get().collection('customers');
	var newCustomer = {
		name: req.body.newUserNameForm,
		balance: req.body.newUserBalanceForm,
		status: req.body.Active
	};
	collection.insert(newCustomer, function(err){
		if (err){
			console.log("Unable to save data due to: " + err);
		}else {
			console.log("Successfully added user: " + req.body.newUserNameForm);
			res.writeHead(302, {
				'Location': 'http://ec2-35-158-247-20.eu-central-1.compute.amazonaws.com:8080/'
				});
			res.end();
			db.close();
		}
	});
}

exports.remove_customer_from_db = function(req, res){
	var collection = db.get().collection('customers');
	var deleteCustomer = {
		name: req.body.deleteUserNameForm
	};
	collection.deleteOne(deleteCustomer, function(err){
		if (err){
			console.log("Failed to delete user " + req.body.deleteUserNameForm + " due to: " + err);
		}else {
			console.log("Successfully removed user: " + req.body.newUserNameForm);
			res.writeHead(302, {
				'Location': 'http://ec2-35-158-247-20.eu-central-1.compute.amazonaws.com:8080/'
				});
			res.end();
			db.close();
		}
	});
}


