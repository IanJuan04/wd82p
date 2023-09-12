// Problem 1

function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addNumbers(4, 23));

// Problem 2

// function factorial(n) {
//   if (n === 0 || n === 1) return 1;

//   let result = 1;

//   for (let i = 1; 1 <= n; i++) result * i;
//   return result;
// }
// console.log(factorial(8));

// // Problem 3

// function reverseString(str) {
//   let reversedStr = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseString += str.charAt(i);
//   }
//   return reversedStr;
// }
// console.log(reverseString("Hello"));

// // Problem 4

// function findLargestNumber(arr) {
//   let largest = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[1] > largest) {
//       largest = arr[i];
//     }
//   }

//   return largest;
// }
// console.log(findLargestNumber([5, 1, 3, 22]));
// // Another way to find the largest number
// function findTheLargestNumber(arr) {
//   return Math.max(...arr);
// }

// console.log(findTheLargestNumber([5, 1, 3, 22]));

// // Problem 5
// // connected to Problem 3
// function isPalindrome(str) {
//   return str === reverseString(str);
// }

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));
