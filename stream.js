var twitter_client = require('./twitter_client');

var client = twitter_client.getClient();

client.stream('statuses/filter', {filter_level:'low', track: 'php', language : 'en'}, function(stream) {
  stream.on('data', function(event) {
    console.log(event);
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});
