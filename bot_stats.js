var fs = require('fs');

var retweets_file = './retweets'; 
var last_retweet_file = './last_retweet';

function store_retweets(tweet){
	fs.appendFileSync(retweets_file, tweet.id_str+', ');
}

function retweets(){
	return fs.existsSync(retweets_file) ? fs.readFileSync(retweets_file, 'utf8') : 'No retweets yet !';
}

function store_last_retweet(tweet){
	fs.writeFileSync(last_retweet_file, tweet.id_str);
}

function last_retweet(){
	return fs.existsSync(last_retweet_file) ? fs.readFileSync(last_retweet_file, 'utf8') : 'No last retweet found';
}

module.exports = {
	retweets: retweets,
	last_retweet: last_retweet,
	store_last_retweet: store_last_retweet,
	store_retweets: store_retweets
}
