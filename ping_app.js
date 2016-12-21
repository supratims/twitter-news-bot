// This is required so that the heroku app does not go down due to inactivity

var http = require("http");

function run(){
	setInterval(function() {
	    http.get("http://ancient-harbor-69037.herokuapp.com/");
	}, 300000); // every 15 minutes (300000)
}

module.exports = {
	run: run
}

