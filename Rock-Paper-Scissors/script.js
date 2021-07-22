const computerChoice = ["rock", "paper", "scissors"];
const winningCombo = [["rock", "scissors"], ["paper", "rock"], ["scissors", 
"paper"]];

let playerScore = 0;
let computerScore = 0;

function computerPlay () {
    return computerChoice[Math.floor(Math.random()*3)]
}

//Maybe change the return to the winner of the round and have a separate function to update the score and display
function playRound (playerSelection, computerSelection) {
    let pSelection = playerSelection.toLowerCase();
    let roundWinner = 0;
  
    //Same choice
    if (pSelection == computerSelection) {
        roundWinner = 2;
    } else {
        for (let i=0; i<3; i++) {
            let combo = winningCombo[i];
            if (pSelection == combo[0] && computerSelection == combo[1]) {
                roundWinner = 1;
            }
        }
    }

    let str;

    if (roundWinner == 2) {
       str = "Tie game! " + pSelection + " and " + computerSelection + " cancel out";
    } else if (roundWinner == 1){
        str = "You win! " + pSelection + " beats " + computerSelection;
        playerScore++;
    } else {
        str = "You lose! " +computerSelection + " beats " + pSelection;
        computerScore++;
    }

    return str;
}

function game() {
    for (let i=0; i<5; i++) {
        let selection = prompt("Rock, Paper, or Scissors?");
        let comp = computerPlay();
        console.log(playRound(selection, comp));
        console.log("Player score: "+playerScore);
        console.log("Computer score: "+computerScore);
    }
}

game();

