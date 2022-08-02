function checkArrayIndex(dataSet) {
  return function (x, y) {
    if (((x ^ 0) === x && x !== "" && x >= 0) && ((y ^ 0) === y && y !== "" && y >= 0)) {
      if (dataSet.length > x && dataSet[x].length > y) {
        return dataSet[x][y];
      }
    }
    return null;
  };
}

const arrTest = [
  [1, 2, 5],
  [3, 7],
];

console.log(checkArrayIndex(arrTest)(1, 0));
