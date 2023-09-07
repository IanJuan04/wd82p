// Errors and Clean Code

// REference Error
const a = 5;
const b = 10;

console.log(c); // there are no declaration of "C"

// Syntax Error
function printHelloWorld() {
  console.log "Hello, World!"; // there are no parenthesis "()"
}

// Type Error
  // => an operanf or argument passed to a function is not of the expected type by that operatpr or function
  // => or when attemting to modify a value that cannot be changed.
  // => or when attempting to use a balue in an inappropriate way.

const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2); // (.push) is only applicable in arrays


// Clean Code

// Naming functions and variables
  // => meaningful
  // => descriptive
  
// Use consisent vocabulary or naming convention

// Good Example
function getPLayerScore(){};
function getPlayerName(){};
function getPlayerTag(){};

//Bad Example
function getPLayerScore(){};
function fetchPlayerName(){};
function retrievePlayerTag(){};

// Good Exapmle
const myName = "Thor";
const selected = true;

// Bad Example
const getCount = 10;
const isSelected = true;

// Good Exapmle
function getCount(){
  return numberOfThings;
}

// Bad Example
function myName(){
  return "Thor";
}