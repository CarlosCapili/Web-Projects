const gridDiv = document.querySelector(".grid");

//create size of grid
gridDiv.style.gridTemplateColumns = 'repeat(16, 1fr)';
gridDiv.style.gridTemplateRows = 'repeat(16, 1fr)';

//Create grid cells
for (let j=0; j<16; j++) {
    for (let i=0; i<16; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        gridDiv.append(cell);
    }
}

const gridCell = document.querySelectorAll(".cell")

gridCell.forEach((cell) => {
    cell.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "black";
    });
});