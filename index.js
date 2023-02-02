let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(array) {
    return(array[Math.floor(Math.random() * array.length)])
}

let computerSelection = getComputerChoice(choices);
console.log(computerSelection);

let playerSelection = prompt("rock, paper or scissors?");

playerSelection = playerSelection.toLowerCase();


function playRound(computerSelection, playerSelection) {
    if(playerSelection === "rock") {
        if(computerSelection === "scissors") {
            alert("You win! Rock beats Scissors!");
            ++playerScore;
        } else if(computerSelection === "paper") {
            alert("You lose! Paper covers Rock!");
           ++computer;
        } else {
            alert("Draw! You both chose Rock!");
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            alert("You win! Paper covers Rock!");
           ++playerScore;
        } else if(computerSelection === "scissors") {
            alert("You lose! Scissors cut Paper!");
           ++computerScore;
        } else {
            alert("Draw! You both chose Paper!");
        }
    } else if(playerSelection === "scissors") {
        if(computerSelection === "paper") {
            alert("You win! Scissors cut paper!");
           ++playerScore;
        } else if(computerSelection === "rock") {
            alert("You lose! Rock beats Scissors!");
           ++computerScore;
        } else {
            alert("Draw! You both chose Scissors!");
        }
    } else {
        alert("Invalid input, please choose Rock, Paper or Sccisors!");
    }
}

console.log(playerScore);
console.log(computerScore);


function game() {
    for(let i = 0; i < 5; i++) {
        if(playerScore === 3) {
                alert("Congratulations! You won the match!");
            } else if(computerScore === 3) {
                alert("I'm sorry, you lost the match!");
            } else if(playerScore === computerScore) {
                alert("Woah! The match was a draw!");
            }
        }
    }


