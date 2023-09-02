//CHALLENGE ACTIVITY 3

//NO.1
function add7(num) {
  return num + 7;
}
console.log(add7(2));

//NO.2
function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(4, 8));

//NO.3
function capitalize(str) {
  const lowerString = str.toLowerCase();
  const firstLetter = lowerString.charAt(0);
  const capitalizedFirstLetter = firstLetter.toUpperCase();

  return capitalizedFirstLetter + lowerString.substring(1);
}

console.log(capitalize("aDrIAn"));

//N0.4
function lastLetter(str) {
  return str.charAt(3);
}

console.log(lastLetter("abcd"));
