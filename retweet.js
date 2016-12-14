var properties = require('./properties');
var Twitter = require('twitter');

var twitter_keys = properties.twitterKeys('twitter.keys');

var client = new Twitter({
	consumer_key: twitter_keys.consumer_key,
	consumer_secret: twitter_keys.consumer_secret,
	access_token_key: twitter_keys.access_token_key,
	access_token_secret: twitter_keys.access_token_secret
});

function _retweet(tweet_id, callback){
	client.post('statuses/retweet', {id: tweet_id}, function(error, tweet, response) {

		if (error) {
			console.log(error);
		}

		//console.log(response);  // Raw response object. 

		callback && callback(tweet);

	});
}

module.exports = {
        retweet: _retweet
}
