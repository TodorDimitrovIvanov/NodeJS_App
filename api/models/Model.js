'use strict';

// Here we add the MondoDB Library dependancy and declare the Schema 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Here we declare the default form of our Schemas 
var TaskSchema = new Schema({
	name: {
    type: String,
    required: 'Database Name'
  },
    Created_date: {
    type: Date,
    default: Date.now
  },
    status: {
     type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);