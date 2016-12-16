var twitter_client = require('./twitter_client');

var client = twitter_client.getClient();

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
