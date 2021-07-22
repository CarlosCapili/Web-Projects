const computerChoice = ["rock", "paper", "scissors"];
const winningCombo = [["rock", "scissors"], ["paper", "rock"], ["scissors", 
"paper"]];

const playerChoices = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;

playerChoices.forEach((button) => {
   
    button.addEventListener('click', () => {
        console.log(button.id);
        console.log(playRound(button.id, computerPlay()));
    });
});

function computerPlay () {
    return computerChoice[Math.floor(Math.random()*3)];
}

//Maybe change the return to the winner of the round and have a separate function to update the score and display
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



