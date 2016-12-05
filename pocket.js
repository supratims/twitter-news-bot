/**
 * Interface with Pocket API
 */

var request = require('request');
var properties = require('properties');

function post(data, success_callback, error_callback){
	

	request.post(
	    'https://getpocket.com/v3/add',
	    data,
	    function (error, response, body) {
		if (error){
			error_callback && error_callbacr(error);
		}
	        if (!error && response.statusCode == 200) {
	            success_callback(response);
	        }
	    }
	);
}

module.exports = {
	post: post
}

