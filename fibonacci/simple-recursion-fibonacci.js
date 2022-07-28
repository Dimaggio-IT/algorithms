// Числа Фибоначчи
//
// ресурсы:
// https://habr.com/ru/post/423939/
// https://programming.guide/dynamic-programming-vs-memoization-vs-tabulation.html
// https://habr.com/ru/post/656007/
//
// последовательности Фибоначчи — числовой последовательности, полученной путем сложения двух
// предшествующих чисел (0, 1, 1, 2, 3, 5, 8, 13, 21 и т. д.):
// временная сложность данной реализации(time complexity) т.е. «наивной» рекурсивной
// имплементации функции Фибоначчи — O(2**n)

function fibRec(n) {
  if (n < 2) {
    return n;
  } else {
    // const fibOneTree = fibRec(n - 1);
    // const fibTwoTree = fibRec(n - 2);
    // return fibOneTree + fibTwoTree;
    // or shortly
    return fibRec(n-1) + fibRec(n-2)
  }
}

const res = fibRec(6);
console.log(res);
