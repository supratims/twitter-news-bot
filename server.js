var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
app.use(bodyParser.json());
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
}

app.get('/', function(req, res){
	res.send(fs.readFileSync('./retweets.json'));
});
app.get('/last', function(req, res){
        res.send(fs.readFileSync('./last_retweet'));
});

app.listen(process.env.PORT || 3000);
console.log('Listening on port ' + (process.env.PORT || 3000));

var poll_user = require('./poll_user');
poll_user.run();
