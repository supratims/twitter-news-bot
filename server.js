var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
}

app.get('/', function(req, res){
	var html = 'Retweets';
	res.send(html);
});

app.listen(process.env.NODE_PORT || 3000);
console.log('Listening on port ' + (process.env.NODE_PORT || 3000));

var poll_user = require('./poll_user');
poll_user.run():
