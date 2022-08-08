"use strict";

const fruits = [
  { name: "orange1", type: "orange", size: 2, color: 2 },
  { name: "orange2", type: "orange", size: 3, color: 3 },
  { name: "orange3", type: "orange", size: 2, color: 4 },
  { name: "grapefruit1", type: "grapefruit", size: 6, color: 5 },
  { name: "grapefruit2", type: "grapefruit", size: 7, color: 6 },
];

const something = { name: "something1", size: 4, color: 4 };
const quantityNeibors = 2;

const id = (x) => x;

const projection = (meta) => (src) =>
  meta.reduce(
    (dest, [name, fn = id, field = name]) => (
      (dest[name] = fn(src[field] === undefined ? src : src[field])), dest
    ),
    {}
  );

const isTypeEqual = (typeInit) => (obj) => {
  return typeInit === obj.type;
};

const determineTypeSmpf = (arr) => {
  const initType = arr[0].type;
  const res = {
    type: "",
    neighborsType: "",
  };
  const isTypeInit = isTypeEqual(initType);
  const allTypesEqual = arr.every(isTypeInit);
  const neighborsType = arr.reduce(function (dest, { type }) {
    dest = dest !== "" ? dest + ", " + type : type;
    return dest;
  }, "");

  if (allTypesEqual) {
    res.type = initType;
  } else {
    res.type = "suspense";
  }
  res.neighborsType = neighborsType;

  return res;
};

// Pythagoras
const estimateDistance = (smf) => (obj) =>
  Math.pow(
    Math.pow(smf.size - obj.size, 2) + Math.pow(smf.color - obj.color, 2),
    1 / 2
  ).toFixed(2);

const edFunc = estimateDistance(something);

const md = [["name"], ["type"], ["farness", edFunc]];

// Usage
console.log("This is the original data set\n");
console.log(fruits);
console.log("");

const p1 = projection(md);
const dataUnsort = fruits.map(p1);
console.log("This is the data set with estimate distance\n");
console.dir(dataUnsort);
console.log("");

const dataSort = dataUnsort.slice();

dataSort.sort((prev, next) => {
  let res = 0;
  if (prev.farness < next.farness) res = -1;
  if (prev.farness > next.farness) res = 1;
  return res;
});

// console.log("");
// console.log(dataSort);

// console.log("");
const resObj = determineTypeSmpf(dataSort.slice(undefined, quantityNeibors));
console.log("It's some kind of fruit: ", something);
console.log("We took " + quantityNeibors + " neighbors");
console.log("");
console.log("This is a result\n");
console.log("It's a result: ", resObj);
