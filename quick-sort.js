/**
 * NOTE: Example 1. Recurcive
 * https://dev-gang.ru/article/bystraja-sortirovka-v-javascript-964jzhnwc1/
 */
// function partition(arr, start, end) {
//   // Taking the last element as the pivot
//   const pivotValue = arr[end];
//   let pivotIndex = start;
//   for (let i = start; i < end; i++) {
//     if (arr[i] < pivotValue) {
//       // Swapping elements
//       [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
//       // Moving to next element
//       pivotIndex++;
//     }
//   }

//   // Putting the pivot value in the middle
//   [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
//   return pivotIndex;
// }

// function quickSortRecursive(arr, start, end) {
//   // Base case or terminating case
//   if (start >= end) {
//     return;
//   }

//   // Returns pivotIndex
//   let index = partition(arr, start, end);

//   // Recursively apply the same logic to the left and right subarrays
//   quickSortRecursive(arr, start, index - 1);
//   quickSortRecursive(arr, index + 1, end);
// }

// //array = [7, -2, 4, 1, 6, 5, 0, -4, 2];
// array = [2, 1, 3];

// console.log(array);

// quickSortRecursive(array, 0, array.length - 1);

// console.log("  " + array.join("  "));

/**
 * NOTE: Example 2. Iterative
 * https://dev-gang.ru/article/bystraja-sortirovka-v-javascript-964jzhnwc1/
 */

// function partition(arr, start, end) {
//   // Taking the last element as the pivot
//   const pivotValue = arr[end];
//   let pivotIndex = start;
//   for (let i = start; i < end; i++) {
//     if (arr[i] < pivotValue) {
//       // Swapping elements
//       [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
//       // Moving to next element
//       pivotIndex++;
//     }
//   }

//   // Putting the pivot value in the middle
//   [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
//   return pivotIndex;
// }

// function quickSortIterative(arr) {
//   // Creating an array that we'll use as a stack, using the push() and pop() functions
//   stack = [];

//   // Adding the entire initial array as an "unsorted subarray"
//   stack.push(0);
//   stack.push(arr.length - 1);

//   // There isn't an explicit peek() function
//   // The loop repeats as long as we have unsorted subarrays
//   while (stack[stack.length - 1] >= 0) {
//     // Extracting the top unsorted subarray
//     end = stack.pop();
//     start = stack.pop();

//     pivotIndex = partition(arr, start, end);

//     // If there are unsorted elements to the "left" of the pivot,
//     // we add that subarray to the stack so we can sort it later
//     if (pivotIndex - 1 > start) {
//       stack.push(start);
//       stack.push(pivotIndex - 1);
//     }

//     // If there are unsorted elements to the "right" of the pivot,
//     // we add that subarray to the stack so we can sort it later
//     if (pivotIndex + 1 < end) {
//       stack.push(pivotIndex + 1);
//       stack.push(end);
//     }
//   }
// }

// ourArray = [7, -2, 4, 1, 6, 5, 0, -4, 2];
// //ourArray = [2, 1, 3];
// quickSortIterative(ourArray);

// console.log(ourArray);

/**
 * NOTE: Example 3. Recursion
 */

const min = (a) => (item) => item < a ? true : false;
const max = (b) => (item) => item > b ? true : false;

function quickSort(arr) {
  if (arr.length < 2) return arr;
  else {
    const pivot = arr[0];
    const minFunc = min(pivot);
    const maxFunc = max(pivot);
    const lessArr = arr.filter(minFunc);
    const greaterArr = arr.filter(maxFunc);
    return quickSort(lessArr).concat([pivot]).concat(quickSort(greaterArr));
  }
}

arr = [10, 5, 2, 3, 20];
console.log(quickSort(arr));
