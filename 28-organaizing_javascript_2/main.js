// The Class syntax

class Dog {
  constructor(breed, color) {
    this.breed = breed;
    this.color = color;
  }

  get breed() {
    return this._breed;
  }

  set breed(value) {
    this._breed = value;
  }

  bark() {
    console.log("arf arf arf!");
  }
}

const dog1 = new Dog("Husky", "White");
dog1.breed = "Chow Chow";
console.log(dog1.breed);

// Module Pattern, IIFE(Immediately Invoked Function Expression)
const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;

  return {
    add,
    sub,
    mul,
    div,
  };
})();

const myCalculator = calculator();

console.log(myCalculator.add(1, 2));
console.log(myCalculator.mul(1, 2));

//Normal Object Syntax
// function Dog(breed, color) {
//   this.breed = breed;
//   this.color = color;

//   this.bark = function () {
//     console.log("Arf Arf Arf!");
//   };
// }

// function dogFactory(breed, color) {
//   const bark = () => console.log("arf Arf Arf!");

//   return { breed, color };
// }
