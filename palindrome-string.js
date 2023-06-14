function isPalyndrom(rawString) {
  const string = rawString.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string.at(i) !== string.at(-i - 1)) {
      return false;
    }
  }
  return true;
}

console.log(isPalyndrom('топот'));
console.log(isPalyndrom('ДовоД'));
console.log(isPalyndrom('Кекс'));
console.log(isPalyndrom('  Лёша на полке клопа нашёл '));
