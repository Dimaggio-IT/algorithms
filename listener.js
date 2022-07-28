'use strict';

//
// Dimaggio +
// hof - функции высшего порядка
// подтипы callback. listener (лиссенеры) или обработчики событий.
// ! отличия лиссенера в том, что он вызывается несколько раз, а колбэк один
//

const iterate = (array, listener) => {
  for (const item of array) {
    listener(item);
  }
};

const cities = ['Kiev', 'London', 'Beijing'];

const print = city => {
  console.log('City:', city);
};

// ф-ия высшего порядка. Она принимает массив и последним параметром ф-ию
// Синхронная т.е. блокирующая все пока не выполнится. В браузере будет "залипание" интерфейс потеряет отзывчивость
// ! такой код javascript плохой
iterate(cities, print);
