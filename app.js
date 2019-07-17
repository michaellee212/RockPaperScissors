let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

//--- Randomizes the computers choice ---//
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);       // Chooses a random number from 0-2
  return choices[randomNumber];
}

//--- Converts the letters to words ---//
function convertToWord(letter) {
  if (letter === "r")
    return "Rock";
  if (letter === "p")
    return "Paper";
    return "Scissors";
}

//--- Win functionality ---//
function win(userChoice, computerChoice) {
  const smallerUserWord = "user".fontsize(3).sub();
  const smallerComputerWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallerUserWord} beats ${convertToWord(computerChoice)}${smallerComputerWord}. You win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
  console.log("Win");
}

//--- Lose functionality ---//
function lose(userChoice, computerChoice) {
  const smallerUserWord = "user".fontsize(3).sub();
  const smallerComputerWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallerUserWord} defeats ${convertToWord(computerChoice)}${smallerComputerWord}. You lose!`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
  console.log("Lose");

}

//--- Draw functionality ---//
function draw(userChoice, computerChoice) {
  const smallerUserWord = "user".fontsize(3).sub();
  const smallerComputerWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallerUserWord} ties ${convertToWord(computerChoice)}${smallerComputerWord}. You draw!`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
  console.log("Draw");
}

//--- Choice functionality determines win/lose/draw ---//
function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("User Choice = " + userChoice);
  console.log("Comp Choice = " + computerChoice);
  switch(userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      // console.log("User Wins");
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      // console.log("Comp Wins");
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      // console.log("Draw");
      draw(userChoice, computerChoice);
      break;
  }
}

//--- onClick functionality ---//
function main() {
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();
