// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (obj === undefined || obj === null || typeof obj === 'function') {
    // object is null, undefined or function => return null
    return "null";

   } else if (typeof obj === 'number' || typeof obj === 'boolean') {
   	//return numbers and boolean as string
   	return "" + obj ;

   } else if (typeof obj === 'string') {
     // object is string return "string"
   	return '\"' + obj + '\"';

   } else if (Array.isArray(obj)) {
     // object is an array return "[array]"
   	var result = '[';

   	obj.forEach(function(element, i) {
   		result += stringifyJSON(element) + ',';
   	});
    // remove the last ',' incase if we got an array
   	if (obj.length > 0) {
   		result = result.slice(0, -1);
   	}
   	result += ']';
   	return result;

   } else if (typeof obj === 'object') {
     // object is an object inside it
   	var result = '';
   	for (var key in obj) {
      var value = obj[key];
   		if (key !== 'undefined' && typeof obj[key] !== 'function' && typeof obj[key] !== undefined ) {
   			result += '' + stringifyJSON(key) + ':' + stringifyJSON(value) + ',';
   		}

   	}
    // remove the last ',' incase if we got an object and its not empty
   	if (Object.keys(obj).length > 0) {
   		result = result.slice(0, -1);
   	}
   	return '{' + result + '}';
   }
 };
