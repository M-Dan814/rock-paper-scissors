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
const result = document.querySelector(".result");

rock.addEventListener("click", () => {
  game("rock");
});

paper.addEventListener("click", () => {
  game("paper");
});

scissors.addEventListener("click", () => {
  game("scissors");
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
    result.innerHTML = `You win! ${playerSelection} beats ${computerSelection}`;
    result.style["color"] = "green";
    result.style["font-size"] = "1.8rem";
  } else if (
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "paper")
  ) {
    compScore++;
    result.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}`;
    result.style["color"] = "red";
    result.style["font-size"] = "1.8rem";
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === computerSelection) {
    return "It's a tie! Play again!";
  }
}

function game(playerChoice) {
  let player = playerChoice;
  let computer = getComputerChoice();

  playRound(player, computer);

  if (playerScore == 5) {
    result.innerHTML = "Congratulations! You won the game!";
    result.style["color"] = "green";
    result.style["font-size"] = "1.8rem";
    result.innerHTML = "";
  } else if (compScore == 5) {
    result.innerHTML = "Oh No! You lost the game!";
    result.style["color"] = "red";
    result.style["font-size"] = "1.8rem";
    result.innerHTML = "";
  }
}

console.log(playRound());
