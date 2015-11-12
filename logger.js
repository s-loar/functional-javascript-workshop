"use strict";

var slice = Array.prototype.slice
    
function logger(namespace) {
	return function(){
		var args = slice.call(arguments); // copy arguments into args as array
  	args.unshift(namespace); // put namespace as first element
  	console.log.apply(console, args);
  }
}

module.exports = logger