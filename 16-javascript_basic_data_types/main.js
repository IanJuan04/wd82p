// JavaScript Basic Data Types
// 1. Numbers
/*  -Intergers (e.g. 10, 400, -5)
    -Floating point numbers( e.g. 12.5, 56. 7786543)
    -Doubles (Just like float)
*/
let age = 28;

let myAge = parseInt("28");
let tempInFarenhiet = parseFloat("89.7");

console.log(typeof age);
console.log(typeof myAge);

let firstNumber = 10;
let secondNumber = 5;
let thirdNumber = parseInt("5");

console.log(6 + 9); //addition
console.log(20 - 15); //substraction
console.log(3 * 7); // multiplication
console.log(10 / 5); // division
console.log(5 ** 2); //exponent
console.log(8 % 9); //remainder

let year = 2023;
//increment
year++;
//decrement
year--;

console.log(year);

//assignment (=)

let x = 3;
let y = 4;
x *= y;

console.log(x);

//comparison
let a = 5;
let b = 2;
console.log(a == b); //equality operator
console.log(a != b); //inequality operator
console.log(a > b); //greaterthan operator
console.log(a < b); //lessthan operator
console.log(a >= b); //greaterthan or equal operator
console.log(a <= b); //lessthan or equal operator

// 2. Strings
let string = "thee revolution will not be televised.";
let single = "Single quotes";
let double = "Double quotes";
let backtick = `Backticks`;

console.log(typeof single);
console.log(typeof double);
console.log(typeof backtick);

console.log("The value of single:" + single);

const name = "Adrian";
const greeting = `Hello, ${name}`;

console.log(greeting);
console.log(`1 ${single}`);

// 3. Boolean
//true or false
