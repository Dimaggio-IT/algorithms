// getProfitableDeposit для сравнения вкладов. У неё должно быть четыре параметра:

// исходный размер депозита;
// срок депозита в месяцах;
// процентная ставка для депозита с простыми процентами;
// процентная ставка для депозита с капитализацией процентов.
// Программа должна рассчитать, сколько я получу с двух разных вкладов: с обычными процентами и с капитализацией. Затем программа должна сравнить результаты и вернуть подходящую строку:

// 'Выбирай обычный вклад. Получишь ' + доход от вклада.
// 'Выбирай капитализацию. Получишь ' + доход от вклада.

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

const getProfitableDeposit = (sumOfDep, months, perSimple, perCap) => {
  const simpleDep = calculateDeposit(sumOfDep, perSimple, months);
  const capDep = calculateDeposit(sumOfDep, perCap, months, true);
  let strRes = "";

  if(simpleDep > capDep) {
    strRes = 'Выбирай обычный вклад. Получишь ' + simpleDep;
  } else {
    strRes = 'Выбирай капитализацию. Получишь ' + capDep;
  }

  return strRes;
};

// Первый тест. Исходная сумма: 10000, количество месяцев: 9, процент без капитализации: 7, процент с капитализацией: 6.8. Ожидаемый ответ: Выбирай обычный вклад. Получишь 10525.
console.log(getProfitableDeposit(10000, 9, 7, 6.8));

// Второй тест. Исходная сумма: 300000, количество месяцев: 18, процент без капитализации: 7.2, процент с капитализацией: 6. Ожидаемый ответ: Выбирай обычный вклад. Получишь 332400
console.log(getProfitableDeposit(300000, 18, 7.2, 6));

// Третий тест. Исходная сумма: 250000, количество месяцев: 14, процент без капитализации: 7, процент с капитализацией: 6.8. Ожидаемый ответ: Выбирай капитализацию. Получишь 270580.
console.log(getProfitableDeposit(250000, 14, 7, 6.8));
