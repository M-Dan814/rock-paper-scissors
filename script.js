const choices = ["rock", "scissors", "paper"];
function getComputerChoice() {
  comp_choice = choices[Math.floor(Math.random() * choices.length)];
  return comp_choice;
}

function playRound(computerChoice, playerChoice) {
  computerChoice = getComputerChoice();
  playerChoice = prompt("Enter your choice: ").toLowerCase();
  console.log(playerChoice);
  if (
    ((playerChoice == "rock") && (computerChoice == "scissors")) ||
    ((playerChoice == "paper") && (computerChoice == "rock")) ||
    ((playerChoice == "scissors") && (computerChoice == "paper"))
  ) {
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
  } else if (
    ((playerChoice == "paper") && (computerChoice == "scissors")) ||
    ((playerChoice == "scissors") && (computerChoice == "rock")) ||
    ((playerChoice == "rock") && (computerChoice == "paper"))
  ) {
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
  }
}

function play() {
  for (let i = 0; i <= 5; i++) {
    playRound();
  }
}

console.log(choices);
play();
