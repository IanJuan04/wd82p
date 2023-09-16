// Declaration of Variables
const display = document.querySelector("input");
const clearBtn = document.querySelector(".clear");
const equalsBtn = document.querySelector(".equals");
const numBtns = document.querySelectorAll(".num");
const operatorBtns = document.querySelectorAll(".operator");

let currentNum = "";
let previousNum = "";
let operation = "";

// Conditions
function computeEquation(currentNum, previousNum, operation) {
  let overall;

  const prev = parseInt(previousNum);
  const cur = parseInt(currentNum);

  switch (operation) {
    case "+":
      overall = prev + cur;
      break;
    case "-":
      overall = prev - cur;
      break;
    case "*":
      overall = prev * cur;
      break;
    case "/":
      overall = prev / cur;
      break;
    default:
      return;
  }
  return overall;
}

function clear() {
  currentNum = "";
  previousNum = "";
  operation = "";
  display.value = currentNum;
}

// Event Listener

clearBtn.addEventListener("click", clear);

equalsBtn.addEventListener("click", function (e) {
  currentNum = computeEquation(currentNum, previousNum, operation);
  display.value = currentNum;
});

numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", function (e) {
    currentNum += e.target.textContent;
    display.value = currentNum;
  });
});

operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", function (e) {
    operation = e.target.textContent;
    previousNum = currentNum;
    currentNum = "";
    display.value = currentNum;
  });
});
