var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
}

var bot_stats = require('./bot_stats');

app.get('/', function(req, res){
	res.send(bot_stats.retweets());
});
app.get('/last', function(req, res){
        res.send(bot_stats.last_retweet());
});

app.listen(process.env.PORT || 3000);
console.log('Listening on port ' + (process.env.PORT || 3000));

var poll_user = require('./poll_user');

// Get list of people we are following
var list_handles = require('./list_handles');
var following = list_handles.getFollowingList();

// For each in list of following we poll as per its config
following.list.forEach(function(item, i){
	poll_user.run(item);
});

var ping_app = require('./ping_app');
ping_app.run();
