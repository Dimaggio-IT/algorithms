/**
 *
 * Dimaggio
 *
 * FIXME: Пузырьковая сортировка
 *
 * она очень медленная среди сортировок
 * выполняются циклы даже после того как массив отсортирован
 *
 * сложность (count): O(n*n)
 *
 */

const arr = [2,3,0,6,8,1,9,4];
let count = 0;

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      // if (arr[j + 1] > arr[j]) { //сортировка по убыванию
      if (arr[j + 1] < arr[j]) { //сортировка по возрастанию
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      // console.log(arr, "\n");
      count += 1;
    }
  }
  return arr;
}

console.log("length", arr.length);
console.log(bubbleSort(arr));
console.log("count = ", count);
