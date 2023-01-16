// сложность O(n/2)

let numbers = [1, 3, 5, 7, 9, 11];
// let numbers = [23,8,30,12,10,26];
// let numbers = [1,461,192,1052,51];
// let numbers = [41,38,78,98];

let temp;

for(let i = 0, j = numbers.length-1; i < j; i++, j--)
{
    temp = numbers[j];
    console.log("i: " + i + ", j: " + j + " temp: " + temp);
    numbers[j] = numbers[i];
    numbers[i] = temp;
}

console.log(numbers);
