'use strict';

let testString = 'abcdefg';

function getIndexOf(string, substring, startIndex = 0) {
  for (let i = startIndex; i <= string.length - substring.length; i++) {
    if (string.slice(i, i + substring.length) === substring) {
      return i;
    }
  }
  return -1;
}

console.log(testString.indexOf('cd')); // вызов типовой ф-ии
console.log('---');
console.log(getIndexOf(testString, 'cd')); // вызов самописной ф-ии indexOf
