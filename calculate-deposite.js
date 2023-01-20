// Оформи программу, как функцию calculateDeposit с четырьмя параметрами:

// начальная сумма депозита;
// процент годовых (число от 0 до 100);
// срок вклада в месяцах;
// с капитализацией процентов или нет (флаг с булевым значением).
// Функция должна возвращать итоговую сумму депозита, округлённую до рублей с помощью Math.floor. Название параметров используй любые.

const calculateDeposit = (deposit, rate, months, isCapitalized = false) => {
  rate /= 100;

  if (!isCapitalized) {
    deposit = (rate / 12) * months * deposit + deposit;
  } else {
    for (let i = 1; i <= months; i++) {
      deposit = deposit + (rate / 12) * deposit;
    }
  }

  return Math.floor(deposit);
};

console.log("1000, 8, 3 = " + calculateDeposit(1000, 8, 3));
console.log("1000, 8, 3, true = " + calculateDeposit(1000, 8, 3, true));
// console.log("100000, 12, 1 = " + calculateDeposit(100000, 12, 1));
// console.log("100000, 12, 1, true = " + calculateDeposit(100000, 12, 1, true));
// console.log("100000, 10, 2 = " + calculateDeposit(100000, 10, 2));
// console.log("100000, 10, 2, true = " + calculateDeposit(100000, 10, 2, true));
// console.log("200000, 6.8, 6 = " + calculateDeposit(200000, 6.8, 6));
// console.log("200000, 0, 6, true = " + calculateDeposit(200000, 0, 6, true));
