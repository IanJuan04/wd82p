// Logical Operators (AND = &&, OR = ||, NOT = !)

let age = 6;

if (age > 5 || age < 10) {
  console.log("Kids");
} else {
  console.log("Teen");
}

//Example for AND Operator
const isAdult = true;
const hasLicense = true;

if (isAdult && hasLicense) {
  console.log("You can drive a car");
} else {
  console.log("You can't drive a car");
}

//Example of OR and AND Operator combined
const yearsOfExperience = 3;
const hasDegree = true;
const knowsProgramming = true;
const hasCertification = false;

if (
  (yearsOfExperience >= 3 && hasDegree && knowsProgramming) ||
  (hasCertification && knowsProgramming)
) {
  console.log("You are qualified.");
} else {
  console.log("You are not qualified.");
}

//Example or NOT Operator
const iceCreamVanOutside = true;
const houseStatusOnFire = true;

if (!(iceCreamVanOutside && houseStatusOnFire)) {
  console.log("You should leave the house quickly.");
} else {
  console.log("You should stay inside");
}

//Switch Case Statements

//Example of Switch Statement
let weather = "sunny";

switch (weather) {
  case "sunny":
    console.log("It's a beautiful day!");
    break;
  case "rainy":
    console.log("Grab your umbrella!");
    break;
  case "snowing":
    console.log("Wear a coat and take a shovel.");
    break;
  default:
    console.log("Let's stay inside!");
    break;
}

let grade = 75;

switch (true) {
  case grade >= 90:
    console.log("A");
    break;
  case grade >= 80:
    console.log("B");
    break;
  case grade >= 70:
    console.log("C");
    break;
  case grade >= 60:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}

const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  default:
    console.log("It's Weekend");
}

//

let Age = 17;
let isEligibleToVote = Age >= 18 ? true : false;
console.log(isEligibleToVote);
