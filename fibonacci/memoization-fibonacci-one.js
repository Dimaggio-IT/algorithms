// Числа Фибоначчи
//
// ресурсы:
// https://habr.com/ru/post/423939/
// https://programming.guide/dynamic-programming-vs-memoization-vs-tabulation.html
// https://habr.com/ru/post/656007/
//
// последовательности Фибоначчи — числовой последовательности, полученной путем сложения двух
// предшествующих чисел (0, 1, 1, 2, 3, 5, 8, 13, 21 и т. д.):
// временная сложность данной реализации(time complexity) т.е.
// основанное на динамическом программировании, выполняется всего-лишь за время О(n)
// Такое время возможно, потому, что при помоще мемоизации мы сохраняем уже
// рассчитанные значения последовательности. Это позволяет не пересчитывать
// одни и теже значения вновь, что сокращает время выполнения с O(2**n) до O(n)

const mem = [];

function memFib(n) {
  if (mem[n] === undefined) {
    if (n < 2) {
      return n;
    } else {
      const result = memFib(n - 2) + memFib(n - 1);
      mem[n] = result;
    }
  }
  return mem[n];
}

const fib = memFib(4);
console.log(fib);
