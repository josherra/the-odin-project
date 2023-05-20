// Get the computer choice - random selection of array value.
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

// Get the player choice - they enter it into a prompt.
function getPlayerChoice() {
  const choice = prompt("Pick either ROCK, PAPER, or SCISSORS....");
  return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    return 0;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return 1;
  } else {
    return 2;
  }
}

let scores = { player: 0, computer: 0, tie: 0 };

for (let i = 0; i < 5; i++) {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();

  let result = playRound(playerChoice, computerChoice);
  switch (result) {
    case 0:
      scores.computer++;
      break;
    case 1:
      scores.player++;
      break;
    case 2:
      scores.tie++;
      break;
  }
}

if (scores.player > scores.computer) {
  console.log(
    `You win!!! The final score was ${scores.player} - ${scores.computer}`
  );
} else if (scores.computer > scores.player) {
  console.log(
    `You lose... The final score was ${scores.computer} - ${scores.player}`
  );
} else {
  console.log("It's a tie :/");
}
