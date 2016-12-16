var fs = require('fs');

function retweets(){
	return fs.existsSync('./retweets.json') ? fs.readFileSync('./retweets.json', 'utf8') : 'No retweets yet !';
}

function last_retweet(){
	return fs.existsSync('./last_retweet') ? fs.readFileSync('./last_retweet', 'utf8') : 'No last retweet found';
}


module.exports = {
	retweets : retweets,
	last_retweet: last_retweet
}
