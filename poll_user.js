var properties = require('./properties');
var user_timeline = require('./user_timeline');
var retweet = require('./retweet');

(function poll(since_id){
	console.log(since_id);
	var params = {
		'screen_name': 'sturents', 'count' : 1
	};
	if (since_id){
		params.since_id = since_id;	
	}
	user_timeline.timeline(params, function(tweets){
		var last_id = 0;
		tweets.forEach(function(item){
			console.log(item.text);
			last_id = item.id;
		})
		poll(last_id);
	});
})();

