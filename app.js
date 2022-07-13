// TODO : Find a Better way to handl case sensitive options from player.

// choose randomly between ['Rock', 'Paper', 'Scissors']
const CHECKHAND = ["rock", "paper", "scissors"]; // for checking logic arguments and user inputs.
const HAND = ["Rock", "Paper", "Scissors"]; // For showing a clean result to the user.

// ? Main Function
game();

// ! Function Declarations
function game() {
  let pScore = 0,
    cScore = 0;
  // play 5 rounds of game, and keep track of scores.
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    let playerSelection = prompt(
      "Choose an Option to save the world: Rock, Paper or Scissors !?"
    );
    if (playerSelection != null) {
      let result = playRound(playerSelection, computerSelection);
      if (result == 1) pScore++;
      else cScore++;
    }
  }

  if (pScore > cScore)
    console.log(`You Scored ${pScore} points over ${cScore} points, You WIN!`);
  else if (pScore < cScore)
    console.log(`You Scored ${pScore} points over ${cScore} points, You Lose!`);
  else console.log("That's a Tie!!");
}

function computerPlay() {
  let index = Math.floor(Math.random() * 3);
  return index;
}

function playRound(pSelection, cSelection) {
  pIndex = CHECKHAND.indexOf(pSelection.toLowerCase());
  switch (pIndex - cSelection) {
    case 0:
      return 0;
      break;
    case 1:
      return 1;
      break;
    case -1:
      return -1;
      break;
    case 2:
      return -1;
      break;
    case -2:
      return 1;
      break;
    default:
      return "There are some issus with the logic :roll_eyes:";
  }
}
