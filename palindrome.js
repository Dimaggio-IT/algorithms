function palindrome(poly) {
  let ylop = 0;
  let isPalindrome = false;
  let schetchik = 0;

  // если перед нами ноль — это палиндром
  if (poly == 0) {
    return true;
  }
  // если число меньше нуля или делится на 10 без остатка — это не палиндром
  if (poly < 0 || poly % 10 == 0) {
    return false;
  }

  for (let i = poly; i > 0; i /= 10) {
    schetchik++;
    ylop += i % 10;
    console.log(`начало итерации №${schetchik} ylop=${ylop} i=${i}`);
    if (i >= 10) {
      ylop *= 10;
    }
    i -= i % 10;
    console.log(`конец итерации №${schetchik} ylop=${ylop} i=${i}`);
  }

  if (poly === ylop) {
    isPalindrome = true;
  }

  return isPalindrome;
}

console.log(palindrome(12));
console.log(palindrome(10));
console.log(palindrome(123321));
console.log(palindrome(505));
console.log(palindrome(404));
console.log(palindrome(5005));
console.log(palindrome(5004));
console.log(palindrome(0));
console.log(palindrome(-1));
console.log(palindrome(100));

// console.log("12 " + palindrome(12));
// console.log("10 " + palindrome(10));
// console.log("123321 " + palindrome(123321));
// console.log("505 " + palindrome(505));
// console.log("404 " + palindrome(404));
// console.log("5005 " + palindrome(5005));
// console.log("5004 " + palindrome(5004));
// console.log("0 " + palindrome(0));
// console.log("-1 " + palindrome(-1));
// console.log("100 " + palindrome(100));
