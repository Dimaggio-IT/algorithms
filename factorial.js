/**
 *
 * Dimaggio
 *
 * FIXME: Нахождение факториала числа и по совместительству простая рекурсия
 *
 * сложность (count): O(n)
 *
 */

let count = 0;

const factorial = (n) => {
  count += 1;
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(3));
console.log("count = ", count);
