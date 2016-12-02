var properties = require('./properties');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: properties.consumer_key,
  consumer_secret: properties.consumer_secret,
  access_token_key: properties.access_token_key,
  access_token_secret: properties.access_token_secret
});

client.stream('statuses/filter', {filter_level:'low', track: 'php', language : 'en'}, function(stream) {
  stream.on('data', function(event) {
    console.log(event);
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});
