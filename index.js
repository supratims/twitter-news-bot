var PropertiesReader = require('properties-reader');
// Have your own keys in a file called twitter.keys in following format
// consumer_key = 
// consumer_secret = 
// access_token_key = 
// access_token_secret = 

var properties = PropertiesReader('twitter.keys');
var comsumer_key = properties.get('consumer_key');
var consumer_secret = properties.get('consumer_secret');
var access_token_key = properties.get('access_token_key');
var access_token_secret = properties.get('access_token_secret');


