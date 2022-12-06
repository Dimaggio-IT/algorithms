/**
 *
 * Dimaggio
 *
 * FIXME: Нахождение факториала числа и по совместительству простая рекурсия
 *
 */

const factorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(4));
