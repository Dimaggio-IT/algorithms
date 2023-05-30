let startNumber = 1;
let multiplier = 4;
let quantity = 7;
let number;

for (let i = 1; i <= quantity; i++) {
  if (!number) {
    number = startNumber;
  } else {
    number *= multiplier;
  }

  console.log(number);
}

/* Техническое задание

Напишите программу, которая последовательно выводит в консоль числа в геометрической прогрессии.

Стартовое значение, с которого должна начаться последовательность, записано в переменную startNumber.

Множитель записан в переменную multiplier.

Количество чисел записано в переменную quantity.

*/
