var http = require("http");

function run(){
	setInterval(function() {
	    http.get("https://ancient-harbor-69037.herokuapp.com/");
	}, 300000); // every 15 minutes (300000)
}

module.exports = {
	run: run
}

