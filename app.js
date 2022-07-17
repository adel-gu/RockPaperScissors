// TODO : Find a Better way to handl case sensitive options from player.

// choose randomly between ['Rock', 'Paper', 'Scissors']
const CHECKHAND = ["rock", "paper", "scissors"]; // for checking logic arguments and user inputs.

//? Main Function
game();

//! Function Declarations
function game() {
  let pScore = 0,
    cScore = 0;
  // play 5 rounds of game, and keep track of scores.
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    let playerSelection = prompt(
      "Choose an Option to save the world: Rock, Paper or Scissors !?"
    );

    if (!CHECKHAND.includes(playerSelection.toLocaleLowerCase()))
      do {
        playerSelection = prompt(
          "Be carful and hurry chose wisely : Rock, Paper or Scissors, the world in danger!!!"
        );
      } while (!CHECKHAND.includes(playerSelection.toLocaleLowerCase()));

    if (playerSelection != null) {
      let round = playRound(playerSelection, computerSelection);
      if (round == 1) pScore++;
      else if (round == -1) cScore++;
    }
  }
  console.log(gameResult(pScore, cScore));
}

function gameResult(pScore, cScore) {
  if (pScore > cScore)
    return `You Scored ${pScore} points over ${cScore} points, You WIN!`;
  else if (pScore < cScore)
    return `You Scored ${pScore} points over ${cScore} points, You Lose!`;
  else return "That's a Tie!!";
}

function computerPlay() {
  let index = Math.floor(Math.random() * 3);
  return index;
}

function playRound(pSelection, cSelection) {
  pIndex = CHECKHAND.indexOf(pSelection.toLowerCase());
  switch (pIndex - cSelection) {
    case 0:
      return 0; //* a Tie case.
      break;
    case 1: //* case (player VS computer) paper VS rock or scissors VS Paper. Player Win.
      return 1;
      break;
    case -1: //* case (player VS Computer ) rock VS paper or paper VS scissors => Player lose.
      return -1;
      break;
    case 2: //* case (player VS Computer ) scissors VS rock => Player lose.
      return -1;
      break;
    case -2: //* case (player VS Computer ) rock VS scissors => Player Win.
      return 1;
      break;
    default:
      return "There are some issus with the logic :roll_eyes: ";
      break;
  }
}
