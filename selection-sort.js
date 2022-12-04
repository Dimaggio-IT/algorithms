/**
 *
 * Dimaggio
 *
 * FIXME: Сортировка выбором
 *
 * сложность (count): O(n*2)
 *
 */

const arr = [5,3,6,2,1];
let count = 0;

function findSmallest(arr) {
  let smallest = arr[0];
  let smallest_index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
    count += 1;
  }

  return smallest_index;
}

function selectionSort(arr) {
  const newArr = [];

  let smallestIndex = 0;
  let smallest = undefined;
  let size = arr.length;

  for (let i = 0; i < size; i++) {
    smallestIndex = findSmallest(arr);
    smallest = arr.splice(smallestIndex, 1);
    newArr.push(smallest[0]);
    count += 1;
  }

  return newArr;
}

console.log(selectionSort(arr));
console.log("count = ", count);
