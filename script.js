const choices = ["rock", "scissors", "paper"];
function getComputerChoice() {
  comp_choice = choices[Math.floor(Math.random() * choices.length)];
  return comp_choice;
}

const rock = document.querySelector("#red");
const paper = document.querySelector("#blue");
const scissors = document.querySelector("#yellow");

function playRound(computerChoice, playerChoice) {
  computerChoice = getComputerChoice();
  playerChoice = prompt("Enter your choice: ").toLowerCase();
  if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    return `You win! ${playerChoice} beats ${computerChoice}`;
  } else if (
    (playerChoice == "paper" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "rock") ||
    (playerChoice == "rock" && computerChoice == "paper")
  ) {
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  }
  return "Invalid choice";
}

function play() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

play();
