

var hostname = "ec2-52-58-37-32.eu-central-1.compute.amazonaws.com";
var hostname_port = "8080";
var db_hostname = "mongodb://ec2-52-58-37-32.eu-central-1.compute.amazonaws.com/App_DB";

module.exports = {
	
	get_hostname: function(){
		return hostname;
	},

	get_hostanme_port: function(){
		return hostname_port;
	},

	get_db_hostname: function(){
		return db_hostname;
	}
}
