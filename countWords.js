"use strict";

function countWords(inputWords) {
  return inputWords.reduce(function(newWords, currentValue) {
  	newWords[currentValue] = ++newWords[currentValue] || 1;
  	return newWords;
	},{});
}

module.exports = countWords