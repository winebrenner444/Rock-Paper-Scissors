let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let input;
let computerSelection;
let playerScoreBox = document.querySelector('#player-score-container');
let computerScoreBox = document.querySelector('#cpu-score-container');
let pDiv = document.createElement('div');
let cDiv =document.createElement('div');
const btns = document.querySelectorAll('button');


//gets computer random choice
function getComputerChoice(array) {
    return(array[Math.floor(Math.random() * array.length)]);
}

 
//keeps scores
function keepPlayerScore() {
    playerScoreBox.textContent = playerScore;
}

function keepComputerScore() {
    computerScoreBox.textContent = computerScore;
}



//logic for each round played
function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        alert("Tie game!");
      } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
      ) {
        computerScore = ++computerScore;
        keepComputerScore();
        alert('Computer wins this time!');
    } else {
        playerScore = ++playerScore;
        keepPlayerScore();
        alert('Way to go! You win!');
    }
}




pDiv.classList.add('player-score');
playerScoreBox.appendChild(pDiv);
playerScoreBox.textContent = playerScore;
cDiv.classList.add('computer-score');
computerScoreBox.appendChild(cDiv);
computerScoreBox.textContent = computerScore;



//plays round by click
btns.forEach (btn => {
    btn.addEventListener('click', (event) => {
        computerSelection = getComputerChoice(choices);
        playRound(computerSelection, event.target.id);
     console.log(computerSelection);
});
});


