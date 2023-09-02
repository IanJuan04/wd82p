function hello(name = "Adrian") {
  // default value is Adrian
  console.log(`Hello ${name}`);
}

hello("Adrian");
hello("Pablo");
hello();

// CHALLENGE ACTIVITY
function subtractNum(num1, num2) {
  let difference = num1 - num2;

  console.log(difference);
}

subtractNum(35, 15);
subtractNum(23, 4);

// Global and Local Scope in Javascript
let age = 18; //GLOBAL SCOPE

function printAge() {
  let age = 19; //LOCAL SCOPE
  console.log(age);
}

printAge();

function add(x, y) {
  return x + y;
}
console.log(add(1, 2));

//arrow method of calculator
const addition = (x, y) => x + y;
const subtraction = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

console.log(addition(3, 5));

let output = 0;

function add(a, b) {
  return a + b;
}

console.log(add(2, 5));

//CHALLENGE AVTIVITY 2
function displayWholeName(firstname, lastname) {
  return firstname + " " + lastname;
}

console.log(displayWholeName("Carlo", "Dacuyan"));
console.log(displayWholeName("Jose", "Rizal"));
console.log(displayWholeName("Juan", "Pablo"));
