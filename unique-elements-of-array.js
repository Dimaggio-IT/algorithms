let numbers = [1, 4, 5, 9, 2, 5, 1];
// let numbers = [12,12,15,7,1,15];
// let numbers = [1,2,3,8,15];
// let numbers = [101,15,116,20,116,15,2];
// let numbers = [89,17,156,89,156,156,89,6,89,89,30];

let uniqueNumbers = [];

for(let i = 0; i < numbers.length; i++) {
  let curNum = numbers[i];
  let count = 0;

  for(let j = 0; j < numbers.length; j++) {

    if(curNum === numbers[j]) {
      count++;
    }

  }

  if(count <= 1) {
    uniqueNumbers.push(curNum);
  }
}

console.log(uniqueNumbers);
