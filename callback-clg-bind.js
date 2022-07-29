"use strict";

//
// Dimaggio
// hof - функции высшего порядка
//

const sum = (a, b, callback) => {
  callback(a + b);
  return undefined;
};

// использование ф-ии sum, которая принимает callback, а callback будет
// console.log.bind - частично примененная ф-ия console.log в которой не будет объектного контекста
// но зато первым параметром пойдет "sum(5, 2) ="
sum(5, 2, console.log.bind(null, "sum(5, 2) ="));
