let playerScore = 0;
let computerScore = 0;

const winningCombo = [["rock", "scissors"], ["paper", "rock"], ["scissors", 
"paper"]];
const playerChoices = document.querySelectorAll('button');

const pChoice = document.querySelector("#player-choice");
const cChoice = document.querySelector("#comp-choice");
const pScore = document.querySelector("#player-score");
const cScore = document.querySelector("#comp-score");
const winner = document.querySelector("#display-winner");

playerChoices.forEach((button) => button.addEventListener('click', game));

function game(e) {
    if (!gameOver()) {  
        let buttonId = e.target.id;
        let compPlay = computerPlay();
        playRound(buttonId, compPlay);
        updateDisplay(buttonId, compPlay);
        updateScore();
        displayWinner();
    }
}

function gameOver() {
    if (playerScore == 5 || computerScore == 5){
        return true;
    }
    return false;
}

function displayWinner() {
    if (playerScore == 5) {
        winner.textContent = "YOU WIN, YOU CHAMP!";
    } 
    
    if (computerScore == 5){
        winner.textContent = "YOU SUCK, YOU LOSER!";
    }
}

function updateDisplay(button, compPlay) {
    pChoice.textContent = button;
    cChoice.textContent = compPlay;
}

function updateScore() {
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}

function computerPlay () {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random()*3)];
}

function playRound (playerSelection, computerSelection) {
    let roundWinner = 0;
  
    //Same choice
    if (playerSelection == computerSelection) {
        roundWinner = 2;
    } else {
        for (let i=0; i<3; i++) {
            let combo = winningCombo[i];
            if (playerSelection == combo[0] && computerSelection == combo[1]) {
                roundWinner = 1;
            }
        }
    }

    let str;

    if (roundWinner == 2) {
       str = "Tie game! " + playerSelection + " and " + computerSelection + " cancel out";
    } else if (roundWinner == 1){
        str = "You win! " + playerSelection + " beats " + computerSelection;
        playerScore++;
    } else {
        str = "You lose! " +computerSelection + " beats " + playerSelection;
        computerScore++;
    }
    return str;
}






