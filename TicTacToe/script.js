const gameboard = (() => {
    const gameDiv = document.querySelector('.gameBoard');
    for (let i=0; i<9; i++) {
        let gridCell = document.createElement('div');
        gridCell.classList.add('cell');
        gameDiv.appendChild(gridCell);
    }
})();

