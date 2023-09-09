//Buttons
const rockBtn = document.getElementById("rock-btn"); // other way to call an ID

const paperBtn = document.querySelector("#paper-btn");
const scissorBtn = document.querySelector("#scissor-btn");

// Scoreboard Labels
const userScoreLabel = document.getElementById("player-score-label");
const tieScoreLabel = document.getElementById("tie-score-label");
const computerScoreLabel = document.getElementById("computer-score-label");

//Turn Labels
const playerTurnLabel = document.getElementById("player-turn-label");
const computerTurnLabel = document.getElementById("computer-turn-label");

// Scoreboard
let userScore = 0;
let tieScore = 0;
let computerScore = 0;

// Win & lose & Tie Conditional
function playRound(playerWeapon, computerWeapon) {
  if (playerWeapon === computerWeapon) {
    return "Tie";
  } else if (
    (playerWeapon === "rock" && computerWeapon === "scissor") ||
    (playerWeapon === "paper" && computerWeapon === "rock") ||
    (playerWeapon === "scissor" && computerWeapon === "paper")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

// Computer weapon random Selection
function getComputerWeapon() {
  const weapons = ["rock", "paper", "scissor"];
  const randomIndex = Math.round(Math.random() * (weapons.length - 1));
  return weapons[randomIndex];
}

// Game Handler with all the Functions all together
function gameHandler(playerWeapon) {
  const computerSelection = getComputerWeapon();
  const playerSelection = playerWeapon.toLowerCase();

  playerTurnLabel.textContent = playerSelection;
  computerTurnLabel.textContent = computerSelection;

  const result = playRound(playerSelection, computerSelection);

  if (result === "You Win!") {
    userScore++;
    userScoreLabel.textContent = userScore;
  } else if (result === "You Lose!") {
    computerScore++;
    computerScoreLabel.textContent = computerScore;
  } else {
    tieScore++;
    tieScoreLabel.textContent = tieScore;
  }
}

// Event
rockBtn.addEventListener("click", () => gameHandler(rockBtn.textContent));
paperBtn.addEventListener("click", () => gameHandler(paperBtn.textContent));
scissorBtn.addEventListener("click", () => gameHandler(scissorBtn.textContent));
