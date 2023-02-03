let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let input;
let computerSelection;

function getComputerChoice(array) {
    return(array[Math.floor(Math.random() * array.length)])
}

 computerSelection = getComputerChoice(choices);
//console.log(computerSelection);



//playerSelection = playerSelection.toLowerCase();


function playRound(computerSelection, playerSelection) {
        playerSelection = prompt("rock, paper or scissors?");
        playerSelection = playerSelection.toLowerCase();
       if(playerSelection === "rock") {
        if(computerSelection === "scissors") {
            ++playerScore;
            alert("You win! Rock beats Scissors!");
        } else if(computerSelection === "paper") {
            ++computerScore;
            alert("You lose! Paper covers Rock!");
        } else {
            alert("Draw! You both chose Rock!");
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            ++playerScore;
            alert("You win! Paper covers Rock!");
        } else if(computerSelection === "scissors") {
            ++computerScore;
            alert("You lose! Scissors cut Paper!");
        } else {
            alert("Draw! You both chose Paper!");
        }
    } else if(playerSelection === "scissors") {
        if(computerSelection === "paper") {
            ++playerScore;
            alert("You win! Scissors cut paper!");
        } else if(computerSelection === "rock") {
            ++computerScore;
            alert("You lose! Rock beats Scissors!");
        } else if(playerSelection === null || playerSelection === "undefined") {
           alert("Cancelled"); 
        }
           else {
            alert("Draw! You both chose Scissors!");
        }
    } else {
        alert("Invalid input, please choose Rock, Paper or Sccisors!");
        return(input = "invalid");
    }
}




function game() {
    for(let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice(choices);
        playRound(computerSelection, playerSelection);
    } if(playerScore > computerScore) {
                alert("Congratulations! You won the match!");
            } else if(computerScore > playerScore) {
                alert("I'm sorry, you lost the match!");
            } else if(playerScore === computerScore) {
                alert("Woah! The match was a draw!");
            } else {
                alert("Something went horribly wrong!");
            }
        }

game();
