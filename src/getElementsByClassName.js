// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var body = document.body;
  var result = [];

  function getClasses(root) {
    if (root.classList && root.classList.contains(className)) {
    	result.push(root);
    }
    if (root.childNodes) {
    	for (var i = 0; i < root.childNodes.length; i++) {
    		getClasses(root.childNodes[i]);
    	}
    }
  }

  getClasses(body);
  return result;

};
