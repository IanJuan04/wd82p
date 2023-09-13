//Javascript Objects

const fruits = ["apple", "orange", "banana"];
fruits.forEach((fruit) => console.log(fruit));

// Create an Object
const user = { name: "Adrian", age: 22, isAdmin: true };

// Get values in an Object Data Type
user.name;
user.age;
user.isAdmin;
user["likes bird"];

// To remove a value in an object
delete user.age;

// To add values in an objects
user.job = "Web Dev";

// Property Value Shortcut
function makeUser(name, age) {
  return { name, age };
}

let user2 = makeUser("Juan", 22);
let user3 = makeUser("Maxime", 19);
console.log(user2);
console.log(user3);

// Loop in an Object
for (let key in user) {
  console.log(user[key]); // Another way to get values in an object
}

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+63": "Philippines",
  "+1": "USA",
};

for (let code in codes) {
  console.log(code);
}

// Exercise 1
let users = {};
users.name = "John";
users.surname = "Smith";
users.name = "Pete";
delete users.name;

console.log(users);

//Exercise 2
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }

  return true;
}

let schedule = {};
schedule.time = "8:30";

console.log(isEmpty(schedule));

// Exercise 3

function sumAllSalaries(salaries) {
  let sum = 0;

  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}

let salaries = { John: 100, Ann: 160, Pete: 130 };

console.log(sumAllSalaries(salaries));
