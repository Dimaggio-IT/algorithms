"use strict";

//
// Dimaggio
// hof - функции высшего порядка
// программная абстракция adder-сумматор (внутри себя имеет данные, имеет методы, у нее есть внутреннее состояние, есть события)
// ! можно сказать, что мы воспользовались всеми преимуществами ООП не написав ниодного класса
// ф-ия высшего порядка adder
// хранит замыкание на initial, добавляя его в переменную value
// приципляем событие, когда value будет достигать определенного значения, то будет вызвано прицепленное событие
// ! в замыкании value постоянно "мутирует" и проверяет достигли ли мы определенного значение, если достигли то распечается в консоли
//

const adder = (initial) => {
  let value = initial;
  const add = (delta) => {
    // console.log("value=" + value);
    value += delta;
    // console.log("value=" + value);
    if (value >= add.maxValue) add.maxEvent(value);
    return add;
  };
  add.max = (max, event) => {
    add.maxValue = max;
    add.maxEvent = event;
    return add;
  };
  return add;
};

// Usage
const maxReached = (value) => {
  console.log("max value reached, value: " + value);
};

const a1 = adder(10);
a1.max(100, maxReached)(-12);

//a1(102);
a1(25);
a1(50);
a1(75);
// a1(100);
// a1(-200)(50)(30);
