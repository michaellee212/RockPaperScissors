let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);       // Chooses a random number from 0-2
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r")
    return "Rock";
  if (letter === "p")
    return "Paper";
    return "Scissors";
}


function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallerUserWord = "user".fontsize(3).sub();
  const smallerComputerWord = "computer".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallerUserWord} beats ${convertToWord(computerChoice)}${smallerComputerWord}. You win!`;
  console.log("Win");
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallerUserWord = "user".fontsize(3).sub();
  const smallerComputerWord = "computer".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallerUserWord} defeats ${convertToWord(computerChoice)}${smallerComputerWord}. You lose!`;
  console.log("Lose");

}

function draw(userChoice, computerChoice) {
  const smallerUserWord = "user".fontsize(3).sub();
  const smallerComputerWord = "computer".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallerUserWord} ties ${convertToWord(computerChoice)}${smallerComputerWord}. You draw!`;
  console.log("Draw");
}

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


function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  scissors_div.addEventListener('click', function() {
    game("s");
  })
}

main();
