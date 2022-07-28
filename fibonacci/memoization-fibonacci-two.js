// Числа Фибоначчи
//
// 0, 1, 1, 2, 3, 5, 8, 13, 21 и т. д.
//
// ресурсы:
// https://habr.com/ru/post/423939/
// https://programming.guide/dynamic-programming-vs-memoization-vs-tabulation.html
// https://habr.com/ru/post/656007/

function fibMemoizedPosition(n) {
  const sequence = [0, 1];
  let i = sequence.length;
  let results = 0;

  if (n < i) {
    return n;
  }

  while (i <= n) {
    results = sequence[i - 1] + sequence[i - 2];
    sequence.push(results);
    i += 1;
  }

  return results;
}

const res = fibMemoizedPosition(6);
console.log(res);
