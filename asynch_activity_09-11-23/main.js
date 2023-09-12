// Problem 1

function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addNumbers(4, 23));

// Problem 2

function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}
console.log(factorialize(5));

// Problem 3

function ReverseString(str) {
  return str.split("").reverse().join("");
}

console.log(ReverseString("adrian"));

// Problem 4

function findLargestNumber() {
  let numbers = [4, 22, 19, 23];
  const max = Math.max(...numbers);

  return max;
}
console.log(findLargestNumber());

// Problem 5

// function isPalindrome(string) {
//   const len = string.length;

//   for (let i = 0; i < len / 2; i++) {
//     if (string[i] !== string[len - 1 - i]) {
//       return "It is not a palindrome";
//     }
//   }
//   return "It is a palindrome";
// }

// const string = prompt("Enter a string: ");

// const value = isPalindrome(string);

// console.log(value);
