var properties = require('./properties');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: properties.consumer_key,
  consumer_secret: properties.consumer_secret,
  access_token_key: properties.access_token_key,
  access_token_secret: properties.access_token_secret
});

client.get('statuses/user_timeline', {screen_name: 'sturents'}, function(errors, tweets, response){
	if (errors){
		throw errors;
	}

        tweets.forEach(function(tweet){
		console.log(tweet.text);		
	});
});
