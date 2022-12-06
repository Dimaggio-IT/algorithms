/**
 *
 * Dimaggio
 *
 * FIXME: Поиск линейный
 *
 * т.е. перебор всех элементов пока не будет найдено искомое
 * значение или не закончатся значения
 *
 * сложность (count): O(n)
 *
 */

const array = [1,4,5,8,5,1,2,7,4,2,11];
let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log("index = ", linearSearch(array, 11));
console.log("count = ", count);
