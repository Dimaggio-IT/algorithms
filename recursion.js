/**
 * Example 1. Рекурсивное суммирование составных чисел числа ) см. код
 */

// basic recursion
// function countdown(i) {
//   console.log(i);
//   if (i <= 1) {
//     return;
//   } else {
//     countdown(i - 1);
//   }
// }

// countdown(3);

/**
 * Example 2. Рекурсивное суммирование элементов массива
 */

// basic recursion
// function sumArr(arr) {
//   if (arr.length === 0) return 0;
//   const newArr = arr.slice(1);
//   return arr[0] + sumArr(newArr);
// }

// // NOTE: tail recursion
// function sumArr(n, arr) {
//   if (arr.length === 0) return n;
//   return sumArr(n + arr[0], arr.slice(1));
// }

// const res = sumArr(0, [2, 1, 4]);
// console.log("res: " + res);

/**
 * Example 3. Рекурсивное определение количества элементов массива
 */

// const countItem = (arr) => {
//   if (arr.length === 0) return 0;
//   return 1 + countItem(arr.slice(1));
// };

// const count = countItem([2, 1, 4, 5, 6]);
// console.log("res: " + count);

/**
 * Example 4.1 Рекурсивное определение наибольшего числа из элементов массива
 */

//  function maxNumberArrayRec(arr) {
//   if (arr.length === 1) {
//     return arr[0];
//   } else if (arr[0] < arr[1]) {
//     return maxNumberArrayRec(arr.slice(1));
//   } else {
//     return maxNumberArrayRec([arr[0]].concat(arr.slice(2)));
//   }
// }

// const max = maxNumberArrayRec([2, 1, 6, 4, 5]);
// console.log("res: " + max);

/**
 * Example 4.2 Рекурсивное определение наибольшего числа из элементов массива
 * применяю тернарный оператор в return
 */
// function maxNumberArrayRec(arr) {
//   if (arr.length === 2) {
//     return arr[0] > arr[1] ? arr[0] : arr[1];
//   }
//   subMax = maxNumberArrayRec(arr.slice(1));
//   return arr[0] > subMax ? arr[0] : subMax;
// }

// const max = maxNumberArrayRec([2, 1, 6, 4, 5]);
// console.log("res: " + max);

