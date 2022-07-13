// choose randomly between ['Rock', 'Paper', 'Scissors']
const HAND = ["Rock", "Paper", "Scissors"];

let ComputerSelection = computerPlay();
console.log(ComputerSelection);

// ! Function Declarations
function computerPlay() {
  let index = Math.floor(Math.random() * 3);
  // console.log(HAND[index]);
  return HAND[index];
}
