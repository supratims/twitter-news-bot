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
		'screen_name': 'sturents', 'count' : 20
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
				console.log(item.id+' : '+item.text);			
				if (i==0) {
					// We store the most recent tweet ID in a file
					fs.writeFile('./tweets.json', item.id);
				}
			})
		}

		// We sleep for some amount of time and then poll again
		var sleep = 20*1000; 
	        setTimeout(function () {
			poll();
	        }, sleep);
	});
})();
