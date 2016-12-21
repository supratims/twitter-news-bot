var user_timeline = require('./user_timeline');
var retweet = require('./retweet');
var bot_stats = require('./bot_stats');

var poll_interval = 120; // 2 mins

function _run(twitter_object){
	(function poll(){
		var last_id;
		// contains the last id analysed
		var tweets_analysed = bot_stats.last_retweet();
		if (!isNaN(parseInt(tweets_analysed))){
			last_id = tweets_analysed;
		}
		var params = {
			'screen_name': 'sturents', 'count' : 1
		};
		if (last_id){
			params.since_id = last_id;
		}
		user_timeline.timeline(params, function(tweets){
			if (!tweets || tweets.length==0){
				console.log("No new tweets found ...");			
			}
			else {
				tweets.forEach(function(item, i){
					if (i==0) {
						console.log('Retweeting : ' + item.id+' : '+item.text);
						retweet.retweet(item.id_str, function (tweeted_item){
							if (tweeted_item && tweeted_item.text) {
								console.log("Retweeted : " + tweeted_item.text);
								bot_stats.store_retweets(item);
							}
							else {
								console.log("Retweet failed");
							}
						});	
						// We store the most recently retweeted tweet ID in a file
						bot_stats.store_last_retweet(item);
					}
					else {
						console.log(item.id+' : '+item.text);
					}
				})
			}

			// We sleep for some amount of time and then poll again
			var sleep = poll_interval*1000; 
	        	setTimeout(function () {
				poll();
		        }, sleep);
		});
	})();
}

module.exports = {
	run: _run
};
