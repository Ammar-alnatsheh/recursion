// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var obj = {};
  var attribute = getAttribute(json);

  for (var i = 0; i < attribute.length; i++){
    var key = attribute[i][0];
    var value = attribute[i][1]

    if(value[0] === '{' && value[value.length-1] === '}'){
      // value is an object
      obj[key] = parseJSON(value);

    }else if (value[0] === '[' && value[value.length-1] === ']') {
      // value is an array
      obj[key] = makeArray(value);

    }else if(Number(value)){
      // value is a number
      obj[key] = Number(value);

    }else if (value === 'true') {
      // value is boolean => true
      obj[key] = true;

    }else if (value === 'false') {
      // value is boolean => false
      obj[key] = false;

    }else if (value === 'null') {
      // value is null
      obj[key] = null;

    }else {
      // value is a string
      obj[key] = value;
    }

  }

  return obj;
}

var getAttribute = function(value){
  value = json.slice(1,json.length-1);

}

var makeArray = function(value){
  var result = [];

  obj.forEach(function(element, i) {
    result += stringifyJSON(element) + ',';
  });

  return result;


}

/*

In JSON, values must be one of the following data types:

a string
a number
an object (JSON object)
an array
a boolean
null
*/
