// https://medium.com/@alivander/%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D1%81%D0%BB%D0%B8%D1%8F%D0%BD%D0%B8%D0%B5%D0%BC-javascript-1c0b0e8ff737

const merge = (arrFirst, arrSecond) => {
  const arrSort = [];
  let i = (j = 0);
  // сравниваем два массива, поочередно сдвигая указатели
  while (i < arrFirst.length && j < arrSecond.length) {
    arrSort.push(arrFirst[i] < arrSecond[j] ? arrFirst[i++] : arrSecond[j++]);
  }
  // обрабатываем последний элемент при разной длине массивов
  // и возвращаем один отсортированный массив
  return [...arrSort, ...arrFirst.slice(i), ...arrSecond.slice(j)];
};

const mergeSort = (arr) => {
  // Проверяем корректность переданных данных
  if (!arr || !arr.length) {
    return null;
  }
  //Если массив содержит один элемент просто возвращаем его
  if (arr.length <= 1) {
    return arr;
  }
  // Находим середину массива и делим его на два
  const middle = Math.floor(arr.length / 2);
  const arrLeft = arr.slice(0, middle);
  const arrRight = arr.slice(middle);
  // Для новых массивов снова вызываем сортировку,
  // сливаем их и возвращаем снова единый массив
  return merge(mergeSort(arrLeft), mergeSort(arrRight));
};

const arr = [6, 4, 1, 3, 2];

console.log(mergeSort(arr));
