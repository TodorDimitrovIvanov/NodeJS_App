'use strict';

var path = require('path');
var router = require('../routes/Routes.js');
//var mongoose = require('mongoose'),
//Task = mongoose.model('Tasks'); // These lines import the mongoose module and configure it

// We use the exports object to make the methods accessible from other files

exports.set_home_page = function (req, res){
	res.sendFile(path.resolve(__dirname + '/../../../views/index.html'));
};

/*
// This method will list all tasks that are saved in the DB 
 exports.list_all_tasks = function(req, res) { 
 		Task.find({}, function(err, task) {
 	  	    if (err)
 	  	    	res.send(err);
 	  	    res.json(task);
 	  	});s
 	};

// This method will create a new taks in the DB
exports.create_a_task = function(req, res) {
  	var new_task = new Task(req.body);
  	new_task.save(function(err, task) {
    	if (err)
      	res.send(err);
    	res.json(task);
  	});
};

// This method will read a sepcified task from the DB 
exports.read_a_task = function(req, res) {
  	Task.findById(req.params.taskId, function(err, task) {
    	if (err)
      	res.send(err);
    	res.json(task);
  	});
};

//This method will update a specified task ( by ID ) from the DB
exports.update_a_task = function(req, res) {
  	Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    	if (err)
      	res.send(err);
    	res.json(task);
  	});
};

//This method will delete a specified task ( by Id ) from the DB
exports.delete_a_task = function(req, res) {
  Task.remove({
    	_id: req.params.taskId
  	}, function(err, task) {
    	if (err)
      		res.send(err);
    	res.json({ message: 'Task successfully deleted' });
  	});
}; */