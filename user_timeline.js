var twitter_client = require('./twitter_client');

var client = twitter_client.getClient(); 

function _timeline(params, callback){
	client.get('statuses/user_timeline', params, function(errors, tweets, response){
		if (errors){
			//throw errors;
			console.log (errors);
		}
		callback && callback(tweets);
	});
}

module.exports = {
        timeline : _timeline
}
