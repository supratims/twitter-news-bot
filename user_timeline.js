var properties = require('./properties');
var Twitter = require('twitter');
var twitter_keys = properties.twitterKeys('twitter.keys');

var client = new Twitter({
  consumer_key: twitter_keys.consumer_key,
  consumer_secret: twitter_keys.consumer_secret,
  access_token_key: twitter_keys.access_token_key,
  access_token_secret: twitter_keys.access_token_secret
});

function _timeline(params, callback){
	client.get('statuses/user_timeline', params, function(errors, tweets, response){
		if (errors){
			throw errors;
		}
		callback && callback(tweets);
		/*
        	tweets.forEach(function(tweet){
			console.log(tweet.created_at +' '+ tweet.text);		
		});
		*/
	});
}

module.exports = {
        timeline : _timeline
}
