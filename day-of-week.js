// Оформи программу в виде функции getDayOfWeek. У неё должно быть два параметра: день недели, на который выпадает первое число месяца, и число, для которого нужно найти день недели в этом месяце.

// Функция должна возвращать строку с названием дня недели. Название должно быть написано с маленькой буквы в именительном падеже: 'понедельник', 'вторник' и так далее.

const findKeys = (obj, expectedValue) => {
  const result = [];

  const entries = Object.entries(obj);
  for (const [key, value] of entries) {
    if (value === expectedValue) {
      result.push(key);
    }
  }

  return result;
};

const getDayOfWeek = (dayOfWeek, numOfDay) => {
  let arrDaysOfWeek = [];
  let objWeek = {
    "1": "понедельник",
    "2": "вторник",
    "3": "среда",
    "4": "четверг",
    "5": "пятница",
    "6": "суббота",
    "7": "воскресенье",
  };

  let numDayOfWeek = Number(findKeys(objWeek, dayOfWeek));
  for(let i = 1, j = numDayOfWeek; i <= 31; i++, j++) {
    if(j > 7) {
      j = 1;
    }

    arrDaysOfWeek.push(j);
  }

  return objWeek[arrDaysOfWeek[numOfDay-1]];
  // console.log(arrDaysOfWeek);
  // console.log(arrDaysOfWeek[numOfDay-1]);
  // console.log(objWeek[arrDaysOfWeek[numOfDay-1]]);
};

// getDayOfWeek("среда", 12);
