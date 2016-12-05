/**
 * Interface with Pocket API
 */

var request = require('request');
var properties = require('properties');

// Auth using pocket api and return a access_token
// https://getpocket.com/developer/docs/authentication
function auth(consumer_key){
	if (!consumer_key) {
		consumer_key = properties.get('consumer_key');
	}
	request.post(
		'https://getpocket.com/v3/oauth/request',
		{
			consumer_key: consumer_key, 
			redirect_uri: 'pocketapp_bot:authorizationFinished'
		},
		function(error, response, body){
			if (error){
				throw error;
			}			
			return response.code;	
		}
	);
}

// https://getpocket.com/developer/docs/v3/add
function post(access_token, url, tweet_id, success_callback, error_callback){
	if (!access_token){
		throw new Error('No access token found. Call auth() first.');
	}
	request.post(
	    'https://getpocket.com/v3/add',
	    {
		url: url,
		tweet_id: tweet_id,
		consumer_key: properties.get('consumer_key'),
		access_token: access_token	
	    },
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

