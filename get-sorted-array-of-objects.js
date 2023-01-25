const arrTest = [
  {
    name: "Петя",
    age: 3,
  },
  {
    name: "Лёля",
    age: 4,
  },
  {
    name: "Алла",
    age: 4,
  },
  {
    name: "Сима",
    age: 2,
  },
];

const getLessThenTheValue = (arrObj, midValue, keyName, midIndex) => {
  const resArr = [];

  for (let i = 0; i < arrObj.length; i++) {
    if(i === midIndex) {
      continue;
    }

    if (arrObj[i][keyName] <= midValue) {
      resArr.push(arrObj[i]);
    }
  }

  return resArr;
};

const getMoreThenTheValue = (arrObj, midValue, keyName, midIndex) => {
  const resArr = [];

  for (let i = 0; i < arrObj.length; i++) {
    if(i === midIndex) {
      continue;
    }
    if (arrObj[i][keyName] > midValue) {
      resArr.push(arrObj[i]);
    }
  }

  return resArr;
};

const partOfArr = (arrObj, keyName) => {
  if (arrObj.length <= 1) {
    return arrObj;
  }

  let midIndex = Math.round(arrObj.length / 2);
  let middleItem = arrObj[midIndex];;
  let lessArr = getLessThenTheValue(arrObj, middleItem[keyName], keyName, midIndex);
  let moreArr = getMoreThenTheValue(arrObj, middleItem[keyName], keyName, midIndex);

  return [...partOfArr(lessArr, keyName), middleItem, ...partOfArr(moreArr, keyName)];
};

const getSortedArray = (arrObj, keyName) => {
  return partOfArr(arrObj, keyName);
};

console.log(getSortedArray(arrTest, "age"));
