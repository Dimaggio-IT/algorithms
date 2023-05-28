let median;
let usersByDay = [12, 3, 7, 9, 10, 5];

if (usersByDay.length % 2 !== 0) {
  let medianIndex = (usersByDay.length - 1) / 2;
  median = usersByDay[medianIndex];
} else {
  let leftIndex = usersByDay.length / 2 - 1;
  let rightIndex = usersByDay.length / 2;
  median = (usersByDay[leftIndex] + usersByDay[rightIndex]) / 2;
}

console.log(median);
