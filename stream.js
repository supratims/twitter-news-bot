// Have your own keys in a file called twitter.keys in following format for properties to fetch
// consumer_key =
// consumer_secret =
// access_token_key =
// access_token_secret =

var properties = require('./properties');
var Twitter = require('twitter');

var twitter_keys = properties.twitterKeys('twitter.keys');

var client = new Twitter({
  consumer_key: twitter_keys.consumer_key,
  consumer_secret: twitter_keys.consumer_secret,
  access_token_key: twitter_keys.access_token_key,
  access_token_secret: twitter_keys.access_token_secret
});

client.stream('statuses/filter', {filter_level:'low', track: 'php', language : 'en'}, function(stream) {
  stream.on('data', function(event) {
    console.log(event);
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});
