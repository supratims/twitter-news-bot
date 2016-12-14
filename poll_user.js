var fs = require('fs');
var properties = require('./properties');
var user_timeline = require('./user_timeline');
var retweet = require('./retweet');

// tweets.json contains the last id analysed
var tweets_analysed = fs.readFileSync('./tweets.json', 'utf8');
		
var last_id;

if (!isNaN(parseInt(tweets_analysed))){
	last_id = tweets_analysed;
}

(function poll(){
	var params = {
		'screen_name': 'sturents', 'count' : 1
	};
	if (last_id){
		params.since_id = last_id;
	}
	user_timeline.timeline(params, function(tweets){
		if (!tweets || tweets.length===0){
			console.log("No new tweets found ...");			
		}
		else {
			tweets.forEach(function(item, i){
				if (i==0) {
					console.log('Retweeting : ' + item.id+' : '+item.text);
					retweet.retweet(item.id_str, function (tweeted_item){
						if (tweeted_item) {
							console.log("Retweeted : " + tweeted_item.text);
						}
						else {
							console.log("Retweet failed");
						}
					});	
					// We store the most recently retweeted tweet ID in a file
					fs.writeFile('./tweets.json', item.id);
				}
				else {
					console.log(item.id+' : '+item.text);
				}
			})
		}

		// We sleep for some amount of time and then poll again
		var sleep = 5*1000; 
	        setTimeout(function () {
			poll();
	        }, sleep);
	});
})();
