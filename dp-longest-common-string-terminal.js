// Заполните таблицу для вычисления самой длинной
// общей подстроки между строками blue и clues

// Вычисление наибольшей общей подстроки между двумя строками
// полученные с терминала
function lcs(strings) {
  let shortest = strings.reduce((a, b) => (a.length <= b.length ? a : b));
  let maxlen = shortest.length;
  let i = 0;
  let j = 0;
  for (let len = maxlen; len >= 0; len--) {
    i++;
    for (let start = 0; start <= maxlen - len; start++) {
      j++;
      let substr = shortest.substring(start, start + len);
      if (strings.every((elem) => ~elem.indexOf(substr))) {
        console.log(i, j);
        return substr;
      }
    }
  }
  console.log(i, j);
  return "";
}

// console.log(process.argv);
// if (process.argv.length < 3) console.log("less than 3 args");
// else console.log(lcs(process.argv.slice(2)));

const strings = ["blus", "cllll"];
const strLcs = lcs(strings);
console.log(strLcs);
