
// indexOf
let guestList = ["Петя", "Настя", "Артур", "Лена", "Настя", "Эммануил"];
let guest = "Петя"; // получаем откуда-нибудь имя гостя

// Обязательно нужно ставить проверку либо >= 0, либо !== -1
// т.к. вернется индекс и он может быть 0, т.е. объект найден и он по 0 индексу
// js же воспримет 0 как ложь и отправить на ложную часть условия (else)

if (guestList.indexOf(guest) >= 0) {
  // пускаем на вечеринку
  console.log("заходи");
} else {
  // отправляем домой
  console.log("уходи");
}