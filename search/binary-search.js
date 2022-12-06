/**
 *
 * Dimaggio
 *
 * FIXME: Поиск бинарный итеративный
 *
 * сложность (count): O(log2n)
 *  т.е в массиве из 16 элементов индекс (если есть искомый элемент) элемента
 *  можно получить макс. за 4 итерации
 *
 */

let count = 0;

function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    count += 1;

    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else if (guess < item) {
      low = mid + 1;
    }
  }
  return -1;
}

myList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log("index: " + binarySearch(myList, 4));
console.log("count = ", count);
