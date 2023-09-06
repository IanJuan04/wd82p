//Rock Paper Scissor Console game

function getComputerSelection() {
  const weapons = ["rock", "paper", "scissor"];
  const randomIndex = Math.round(Math.random() * (weapons.length - 1));

  return weapons[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function game() {
  for (let i = 0; i < 3; i++) {
    const playerSelection = prompt("Type your weapon!");
    const computerSelection = getComputerSelection();

    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
