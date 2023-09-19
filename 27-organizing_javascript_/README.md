// organizing javascript

// 1. Plain Old JavaScript Objects
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

const playerOne = {
name: "tim",
marker: "X",
};

const playerTwo = {
name: "jenn",
marker: "O",
};

// 2. Object Constructors

function Player(name, marker) {
this.name = name;
this.marker = marker;
}

const playerThree = new Player("steve", "Y");
const playerFour = new Player("john", "W");

console.log(playerThree);
console.log(playerFour);

function Book(title, author, pages) {
this.title = title;
this.author = author;
this.pages = pages;
}

const book1 = new Book("Harry Potter", "Jk Rowling", 500);
const book2 = new Book("Atomic Habits", "James Clear", 350);

console.log(book1);

// 3. Factory Function
function personFactory(name, marker) {
return { name, marker };
}

const playerFive = personFactory("jeff", "A");
console.log(playerFive);

// 4. Module Patters
// 5. Classes
// 6. ES6 Modules
