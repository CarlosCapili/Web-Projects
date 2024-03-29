const Player = (player) => {
    const getPlayer = () => player;
    return {getPlayer}
}

//Responsible for the game board
const gameBoard = (() => {
    let grid = ['','','','','','','','',''];

    const getGrid = () => grid;
    const setGrid = (cell, player) => grid[cell] = player;

    const resetGrid = () => {
        grid = ['','','','','','','','',''];
    }

    return {getGrid, setGrid, resetGrid};
})();

//Controls the display logic
const displayController = (() => {
    const gameCell = document.querySelectorAll('.cell');
    const restartBtn = document.querySelector('#restart');
    const gameBoardDiv = document.querySelector('.displayBoard');
    
    restartBtn.addEventListener('click', () => {
        reset();
    });

    const reset = () => {
        gameBoard.resetGrid();
        gameController.reset();
        updateGrid();
        clearMessage();
    }
    
    const displayWinner = (player, win) => {
        if (win) {
            gameBoardDiv.textContent = `Player ${player.getPlayer()} wins!`;
        }
        else {
            gameBoardDiv.textContent = 'Tie game!';
        }
    }

    const clearMessage = () => {
        gameBoardDiv.textContent = '';
    }
 
    const updateGrid = () => {
        let grid = gameBoard.getGrid();
        gameCell.forEach(cell => {
            cell.textContent = grid[cell.id];
        });
    }

    return {
        updateGrid,
        displayWinner
    };

})();


//Controls the game logic
const gameController = (() => {
    const playerOne = Player("X");
    const playerTwo = Player("O");

    let playerTurn = true; // true means its X turn and false is O turn
    let turns = 0; //keeps track of how many turns have been played
    let gameOver = false;

    const gameCell = document.querySelectorAll('.cell');
    gameCell.forEach(cell => {
        cell.addEventListener('click', (e) => {
            playerClicked(e);
        });
    });

    const reset = () => {
        playerTurn = true;
        turns = 0;
        gameOver = false;
    }

    const playerClicked = (e) => {
        if (gameOver == false) {
            let grid = gameBoard.getGrid();
            let cell = e.target.id;
            let player = currentPlayer();
    
            if (grid[cell] == '') {
                gameBoard.setGrid(cell, player.getPlayer());
                displayController.updateGrid();
                playerTurn = !playerTurn;
                turns++;
            }
            //Check if win occurs after 5 turns
            if (turns >= 5) {
                checkWin(player);
            }
        }
    }

    const currentPlayer = () => {
        return (playerTurn ? playerOne: playerTwo);
    }

    const checkWin = (player) => {
        let grid = gameBoard.getGrid();
        let win = false;

        //horizontal win
        if (grid[0] != '' && grid[0] == grid[1] && grid[0] == grid[2]) {
            //first row
            win = true;
            console.log('win 0');
        } 
        else if (grid[3] != '' && grid[3] == grid[4] && grid[3] == grid[5]) {
            //second row
            win = true;
            console.log('win 1');
        }
        else if (grid[6] != '' && grid[6] == grid[7] && grid[6] == grid[8]) {
            //third row
            win = true;
            console.log('win 2');
        }

        //vertical win
        if (grid[0] != '' && grid[0] == grid[3] && grid[0] == grid[6]) {
            //first column
            win = true;
            console.log('win 3');
        }
        else if (grid[1] != '' && grid[1] == grid[4] && grid[1] == grid[7]) {
            //second column
            win = true;
            console.log('win 4');
        } 
        else if (grid[2] != '' && grid[2] == grid[5] && grid[2] == grid[8]) {
            //third column
            win = true;
            console.log('win 5');
        }
        
        //diagonal win
        if (grid[4] != '') {
            if (grid[0] == grid[4] && grid[0] == grid[8]){
                win = true;
                console.log('win 6');
            }
            if (grid[2] == grid[4] && grid[2] == grid[6]) {
                win = true;
                console.log('win 7');
            }
        }

        if (win == true || (turns == 9 && win == false)) {
            gameOver = true;
            displayController.displayWinner(player, win);
        }
    }

    return {
        reset
    };

})();








