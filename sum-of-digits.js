// Напиши программу getYears, которая будет возвращать массив с подходящими датами.
// Функция должна принимать на вход три параметра. Первый параметр — год, с которого нужно начать вести отсчёт (включительно). Второй — год, которым этот отсчёт надо закончить (включительно). Третий — число, которое обозначает сумму цифр в номере года.
// Названия параметров могут быть любыми.
// Годы в массиве должны быть числами и располагаться по возрастанию, от меньшего к большему.

const sumArrNum = (arr) =>
  arr.reduce(function (sum, current) {
    return sum + current;
  }, 0);

const numToArray = (year) => {
  let arrNum = [];
  for (let i = year; i > 0; i /= 10) {
    let curNum = i % 10;
    arrNum.unshift(curNum);
    i -= curNum;
  }

  return arrNum;
};

const isYear = function (year, sum) {
  let resBool = false;

  let arrNum = numToArray(year);
  let sumCur = sumArrNum(arrNum);
  if (sumCur === sum) {
    resBool = true;
  }

  return resBool;
};

const getYears = (startYear, endYear, sum) => {
  let arrRes = [];

  for (let i = startYear; i <= endYear; i++) {
    if (isYear(i, sum)) {
      arrRes.push(i);
    }
  }

  return arrRes;
};

console.log(getYears(2018, 2045, 11));
