"use strict";

const testString = 'abcdefg';

function slice(string, startIndex = 0, endIndex = string.length) {
  let resultString = '';

  for (let i = startIndex; i < endIndex; i++) {
    resultString += string[i]
  }

  return resultString;
}

console.log(slice(testString));
console.log(slice(testString, 1));
console.log(slice(testString, 1, 3));
