function minMax(items) {
  return items.reduce((acc, val) => {
    acc[0] = acc[0] === undefined || val < acc[0] ? val : acc[0];
    acc[1] = acc[1] === undefined || val > acc[1] ? val : acc[1];
    return acc;
  }, []);
}

function checkArrayIndex(dataSet) {
  return function (x, y) {
    if (
      (x ^ 0) === x &&
      x !== "" &&
      x >= 0 &&
      (y ^ 0) === y &&
      y !== "" &&
      y >= 0
    ) {
      if (dataSet.length > x && dataSet[x].length > y) {
        return dataSet[x][y];
      }
    }
    return null;
  };
}

function initNewMatrix(xLength, yLength) {
  arrRes = [];
  for (let i = 0; i < xLength; i++) {
    arrRes[i] = [];
    for (let j = 0; j < yLength; j++) {
      arrRes[i][j] = 0;
    }
  }
  return arrRes;
}

function longestSubsequence(arrStrings) {
  if (arrStrings.length === 2) {
    const str1 = arrStrings[0];
    const str2 = arrStrings[1];
    const str1Len = str1.length;
    const str2Len = str2.length;
    const arrRes = initNewMatrix(str1Len, str2Len);
    const checkIndex = checkArrayIndex(arrRes);

    for (let i = 0; i < str1Len; i++) {
      for (let j = 0; j < str2Len; j++) {
        if (str1[i] === str2[j]) {
          if (checkIndex(i - 1, j - 1) !== null) {
            arrRes[i][j] = arrRes[i - 1][j - 1] + 1;
          } else {
            arrRes[i][j] = 1;
          }
        } else {
          let cellUp = undefined;
          let cellLeft = undefined;

          if (checkIndex(i - 1, j) !== null) {
            cellUp = arrRes[i - 1][j];
          } else {
            cellUp = 0;
          }

          if (checkIndex(i, j - 1) !== null) {
            cellLeft = arrRes[i][j - 1];
          } else {
            cellLeft = 0;
          }

          arrRes[i][j] = minMax([cellUp, cellLeft])[1];
        }
      }
    }
    return arrRes;
  } else {
    throw new Error("Incorrect quantity of parameters required for operation");
  }
}

try {
  // const strings = ["fosh", "fort"];
  const strings = ["fosh", "fish"];
  const arrSub = longestSubsequence(strings);
  const prettySub = arrSub.map((row) => row.join("")).join("\n");
  console.log(prettySub);
  console.log("---");
  console.log("answer: " + prettySub.substr(prettySub.length - 1));
} catch (e) {
  console.log("throw error: " + e.message);
}

// console.log(process.argv);
// if (process.argv.length < 2) console.log("less than 3 args");
// else console.log(longestSubsequence(process.argv.slice(2)));
