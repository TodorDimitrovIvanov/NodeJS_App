'use strict';

var express = require("express");
var controller = require('../controllers/Controller.js');
var DB_Controller = require('../controllers/DB_Controller.js');

// Here we declare the methods, that will handle the URLs and their requests
module.exports = function(app) {
	
	// This line declares the controller variable and imports it from the file 
	

	/*// This will redirect all "tasks" URLs without an ID to the corresponding method from the controller 
	app.route('/tasks')
    	.get(controller.list_all_tasks)
    	.post(controller.screate_a_task);

	//This will redirect all "tasks" URLs with an ID to the corresponding method from the controller 
    app.route('/tasks/taskId')
    	.get(controller.read_a_task)
    	.put(controller.update_a_task)
    	.delete(controller.delete_a_task); */

    app.route('/')
    	.get(controller.set_home_page);

    app.route('/customers/create')
        .post(DB_Controller.add_customer_to_db);

    app.route('customers/all')
        .get(DB_Controller.list_all_customers);

};