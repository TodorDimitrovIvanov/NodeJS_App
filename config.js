

var hostname = "ec2-35-158-247-20.eu-central-1.compute.amazonaws.com";
var hostname_port = 8080;
var db_hostname = "mongodb://ec2-35-158-247-20.eu-central-1.compute.amazonaws.com";
var db_name = "App_DB";
var db_port = 1337;


module.exports = {
	
	get_hostname: function(){
		return hostname;
	},

	get_server_port: function(){
		return port;
	},

	get_hostanme_port: function(){
		return hostname_port;
	},

	get_db_hostname: function(){
		return db_hostname;
	},

	get_db_name: function(){
		return db_name;
	},

	get_db_port: function(){
		return db_port;
	}
}
