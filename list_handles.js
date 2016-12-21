// Lists the handles that we are following 

var fs = require('fs');


function getFollowingList(){
	var str = fs.readFileSync('./following.twitter');
	var config = JSON.parse(str);

	return config;

}

module.exports = {
	getFollowingList : getFollowingList
};
