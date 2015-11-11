"use strict";

function getShortMessages(messages) {
  return messages.filter(function(text){
  	return text.message.length < 50;
  }).map(function(text){
  	return text.message;
  });
}

module.exports = getShortMessages