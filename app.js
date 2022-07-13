// choose randomly between ['Rock', 'Paper', 'Scissors']
const HAND = ["Rock", "Paper", "Scissors"];

const computerSelection = computerPlay();
const playerSelection = "Rock";

// ? Main Function
console.log(playRound(playerSelection, computerSelection));

// ! Function Declarations
function computerPlay() {
  let index = Math.floor(Math.random() * 3);
  return index;
}

function playRound(pSelection, cSelection) {
  pIndex = HAND.indexOf(pSelection);
  switch (pIndex - cSelection) {
    case 0:
      return "That's a Tie!!";
      break;
    case 1:
      return `You Win, ${HAND[pIndex]} beats ${HAND[cSelection]}.`;
      break;
    case -1:
      return `You Lose, ${HAND[cSelection]} beats ${HAND[pIndex]}.`;
      break;
    case 2:
      return `You Lose, ${HAND[cSelection]} beats ${HAND[pIndex]}.`;
      break;
    case -2:
      return `You Win, ${HAND[pIndex]} beats ${HAND[cSelection]}.`;
      break;
    default:
      return "There are some issus with the logic :roll_eyes:";
  }
}
