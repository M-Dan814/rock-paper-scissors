let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
  const choices = ["rock", "scissors", "paper"];
  comp_choice = choices[Math.floor(Math.random() * choices.length)];
  return comp_choice;
}

const rock = document.querySelector("#red");
const paper = document.querySelector("#blue");
const scissors = document.querySelector("#yellow");

function getPlayerChoice(choice = "rock") {
  console.log(choice);
  return choice;
}

rock.addEventListener("click", () => {
  playRound("rock");
});

paper.addEventListener("click", () => {
  playRound("paper");
});

scissors.addEventListener("click", () => {
  playRound("scissors");
});

function playRound(playerSelection, computerSelection) {
  console.log(`You selected ${playerSelection}`);
  console.log(`Computer selected ${computerSelection}`);
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "paper")
  ) {
    compScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === computerSelection) {
    return "It's a tie! Play again!";
  }
}

function game(playerChoice) {
  let player = playerChoice;
  let computer = getComputerChoice();
}

console.log(playRound());
