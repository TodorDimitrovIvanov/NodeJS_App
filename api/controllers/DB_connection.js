var MongoClient = require('mongodb').MongoClient;

var db_object = {
	db: null,
}

// ------------------------------------------
// --------> Database set up below <---------

exports.connect = function(url, done){
	if (db_object.db) return (done);

	MongoClient.connect(url, function(err, db){
		if (err) return done(err);
		db_object.db = db;
		//done(err);
	});
}

exports.get = function(){
	return db_object.db;
}

exports.close = function(){
	if (db_object.db){
		db_object.db.close(function(err, result) {
      		db_object.db = null;
      		db_object.mode = null;
      		//done(err);
		});
	}
}

// --------> End of Database set up <---------
// ------------------------------------------
// Following this tutorial: https://www.terlici.com/2015/04/03/mongodb-node-express.html