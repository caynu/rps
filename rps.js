console.log("Rock, Paper, Scissors!");

var computerPlay = Math.floor(Math.random() * 3);
var playerSelection = prompt("Enter your choice!");

var playerScore = 0;
var computerScore = 0;

var player;
var computer;


    if (player = true) {
        playerScore++;
    } else if (computer = true) {
        computerScore++;
    }


function computerSelection () {
}  if (computerPlay === 1) {
    computerPlay = "rock";
}  else if (computerPlay = 2) {
    computerPlay === "paper";
}  else {
    computerPlay === "scissors";
}

function playRound(playerSelection,computerPlay){
    playerSelection = playerSelection.toLowerCase();
    computerPlay = computerPlay.toLowerCase();
  if (playerSelection === computerPlay) {
    console.log("It\'s a draw!");
    console.log (`Your score is: ${playScore}, while your oponent\s score is: ${computerScore}`);
}  else if ((playerSelection === "rock") && (computerPlay === "scissors")) {
    console.log("Rock beats scissors! You won!");
    player = true;
    console.log (`Your score is: ${playScore}, while your oponent\s score is: ${computerScore}`);
}  else if ((playerSelection === "paper") && (computerPlay === "scissors")) {
    console.log("Scissors beat paper. You lose!");
    computer = true;
    console.log (`Your score is: ${playScore}, while your oponent\s score is: ${computerScore}`);
}  else if ((playerSelection === "rock") && (computerPlay === "paper")) {
    console.log("Paper beats rock! You lose!");
    computer = true;
    console.log (`Your score is: ${playScore}, while your oponent\s score is: ${computerScore}`);
}  else if ((playerSelection === "paper") && (computerPlay === "rock")) {
    console.log("Paper beats rock! You won!");
    player = true;
    console.log (`Your score is: ${playScore}, while your oponent\s score is: ${computerScore}`)
} 

  if (playerScore === 3) {
    console.log("You won!");
}  else if (computerScore === 3) {
    console.log("Computer won!");
  }
}