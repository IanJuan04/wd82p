// // DOM Manipulation & Events

// const container = document.querySelector("#container");
// const display = document.querySelector("#display");

// const div = document.createElement("div");
// div.classList.add("stop");

// // Append
// container.appendChild(div);

// //Remove elements from DOM or another node
// container.removeChild(div);

// const div2 = document.createElement("div");

// // div2.style.backgroundColor = "red";
// // div2.style.height = "100px";
// // div2.style.width = "100px";

// // div2.style.cssText = "height: 100px; width: 100px, background-color: red;";

// div2.setAttribute(
//   "style",
//   "height: 100px; width: 100px; backgroundColor: red;"
// );

// container.appendChild(div2);

// // Working with classes in nodes
// div2.classList.add("red-box");
// div2.classList.remove("red-box");
// div2.classList.toggle("red-box");

// // To add text
// div2.textContent = "Hello World!";

// Exercise
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is a text content!";

container.appendChild(content);

const p = document.createElement("p");
container.appendChild(p);

const h3 = document.createElement("h3");
container.appendChild(h3);
h3.textContent = "I'm blue h3!";
h3.style.cssText = "color: blue;";

const div = document.createElement("div");
const p2 = document.createElement("p");
const h1 = document.createElement("h1");

div.appendChild(h1);
div.appendChild(p);
container.appendChild(div);

h1.textContent = "I'm in a div";
p.textContent = "ME TOO!";
// End of Exercise

// const btn = document.querySelector("#btn");
// // btn.onclick = function () {
// //   alert("Hello, World!");
// // };

// btn.addEventListener("click", changeText);

// function changeText() {
//   if (btn.textContent === "Clicked") {
//     btn.textContent = "Clicked me";
//   } else {
//     btn.textContent = "Clicked";
//   }
// }

// function changeWord() {
//   btn.textContent = "Clicked!";
// }

// function turnActive() {
//   btn.classList.toggle("active");
// }
