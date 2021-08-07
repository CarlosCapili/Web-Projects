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
 
    const updateGrid = () => {
        let grid = gameBoard.getGrid();
        gameCell.forEach(cell => {
            cell.textContent = grid[cell.id];
        });
    }

    return {
        updateGrid
    };

})();


//Controls the game logic
const gameController = (() => {
    const playerOne = Player("X");
    const playerTwo = Player("O");
    let playerTurn = true; // true means its X turn and false is O turn
    let turns = 0; //keeps track of how many turns have been played
    let gameOver = false;

    const playerClicked = (e) => {
        if (gameOver == false) {
            let grid = gameBoard.getGrid();
            console.log(e.target.id);
            let player;
    
            if (playerTurn == true) {
                player = playerOne;
            } 
            else {
                player = playerTwo;
            }
    
            if (grid[e.target.id] == '') {
                e.target.textContent = player.getPlayer();
                gameBoard.setGrid(e.target.id, player.getPlayer());
                console.log(gameBoard.getGrid());
                console.log(player.getPlayer());
                playerTurn = !playerTurn;
                turns++;
            }
    
            if (turns >= 5) {
                console.log('5 turns have past');
                checkWin(player);
            }
        }

    }

    //Check if win occurs after 5 turns
    const checkWin = (player) => {
        let grid = gameBoard.getGrid();
        let win = false;
        //horizontal win
        if (grid[0] == grid[1] && grid[0] == grid[2]) {
            //first row
            win = true;
        } 
        else if (grid[3] == grid[4] && grid[3] == grid[5]) {
            //second row
            win = true;
        }
        else if (grid[6] == grid[7] && grid[6] == grid[8]) {
            //third row
            win = true;
        }

        //vertical win
        if (grid[0] == grid[3] && grid[0] == grid[6]) {
            //first column
            win = true;
        }
        else if (grid[1] == grid[4] && grid[1] == grid[7]) {
            //second column
            win = true;
        } 
        else if (grid[2] == grid[5] && grid[2] == grid[8]) {
            //third column
            win = true;
        }
        
        //diagonal win
        if (grid[0] == grid[4] && grid[0] == grid[8]){
            win = true;
        }
        if (grid[2] == grid[4] && grid[2] == grid[6]) {
            win = true;
        }

        if (win == true) {
            console.log(`Player ${player.getPlayer()} wins!`);
            gameOver = true;
        }

        if(turns == 9 && win == false) {
            console.log('Tie game!');
            gameOver = true;
        }
    }

    const gameCell = document.querySelectorAll('.cell');
    gameCell.forEach(cell => {
        cell.addEventListener('click', playerClicked);
    });

})();








