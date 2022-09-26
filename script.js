choices = [/rock/i, /scissors/i, /paper/i];
function getComputerChoice() {
  comp_choice = Math.floor(Math.random() * choices.length);
  return comp_choice;
}

function playRound(computerChoice, playerChoice) {
  computerChoice = getComputerChoice();
  playerChoice = prompt("Enter your choice: ");
  if (choices.indexOf(playerChoice) < 0) {
    playerChoice = prompt("Invalid choice. Enter again: ");
  }
  if (
    (playerChoice == /rock/i && computerChoice == /scissors/i) ||
    (playerChoice == /paper/i && computerChoice == /rock/i) ||
    (playerChoice == /scissors/i && computerChoice == /paper/i)
  ) {
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
  } else if (
    (playerChoice == /paper/i && computerChoice == /scissors/i) ||
    (playerChoice == /scissors/i && computerChoice == /rock/i) ||
    (playerChoice == /rock/i && computerChoice == /paper/i)
  ) {
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
  }
}
