var properties = require('./properties');
var Twitter = require('twitter');
var twitter_keys;

function _getClient(){

	if (process.env.consumer_key){
		twitter_keys = process.env;
	}
	else {
		twitter_keys = properties.twitterKeys('twitter.keys');
	}
	return new Twitter({
		  consumer_key: twitter_keys.consumer_key,
		  consumer_secret: twitter_keys.consumer_secret,
		  access_token_key: twitter_keys.access_token_key,
		  access_token_secret: twitter_keys.access_token_secret
	});

}

module.exports = {
	getClient: _getClient
};
