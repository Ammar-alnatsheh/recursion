// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  
  //test if its an objedct or array
  if(json[1] === '[' && json[json.length-2] === ']'){
    //json is an array
    return parseArray(json);
    
  }else if(json[1] === '{' && json[json.length-2] === '}'){
    //json is an object
    return parseObj(json);
    
  }else{
    // wrong input throw error
    throw "bad input";
  }
  
  
}

function parseObj(obj){
  
  
}

function parseArray(arr){
  var result = [];
  var values =[];
  
  // clean the arr string by removing the brackets  "[ ... ]"
  arr = arr.slice(1,arr.length-1);
  
  // find value by , with nested objects
  
  
  
  
  
}

function valueType(value)
{
    if(value[0] === '{' && value[value.length-1] === '}'){
      // value is an object if first and last index is {}
      return parseJSON(value);

    }else if (value[0] === '[' && value[value.length-1] === ']') {
      // value is an array if first and last index is []
      return parseJSON(value);

    }else if(Number(value)){
      // value is a number
      return Number(value);

    }else if (value === 'true') {
      // value is boolean => true
      return true;

    }else if (value === 'false') {
      // value is boolean => false
      return false;

    }else if (value === 'null') {
      // value is null
      return = null;

    }else {
      // value is a string
      return value;
    }

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
