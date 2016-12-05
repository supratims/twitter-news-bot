var PropertiesReader = require('properties-reader');

function twitterKeys(file){
	var properties = PropertiesReader(file);
	return {
        	consumer_key: properties.get('consumer_key'),
	        consumer_secret: properties.get('consumer_secret'),
	        access_token_key: properties.get('access_token_key'),
        	access_token_secret: properties.get('access_token_secret')
	};
}

function pocketKeys(file){
	var properties = PropertiesReader(file);
	return {
        	consumer_key: properties.get('consumer_key'),
	}

}

module.exports = {
	twitterKeys: twitterKeys,
	pocketKeys: pocketKeys
}
