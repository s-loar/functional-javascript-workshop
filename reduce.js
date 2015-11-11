"use strict";

function reduce(arr, fn, initial) {
  return (function reduceNext(index, currentValue) {
    if (index > arr.length - 1) return currentValue;
    return reduceNext(index + 1, fn(currentValue, arr[index], index, arr))
  })(0, initial)
}

module.exports = reduce