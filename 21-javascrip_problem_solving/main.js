// When a user inputs a number
let userInput = parseInt(prompt("Enter a number"));

//Loop from 1 to the entered number
for (let i = 1; i <= userInput; i++) {
  // If the current number is divisible by 3
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
