const gridDiv = document.querySelector(".grid");

//Color choices 
let color = "#000";
const currentColor = document.querySelector("#currentColor");
const colorTemplate = document.querySelector("#colorTemplate");
const colors = ["FFFFFF", "C0C0C0", "808080", "000000", 
                "FF0000", "800000", "FFFF00", "808000",
                "00FF00", "008000", "00FFFF", "008080",
                "0000FF", "000080", "FF00FF", "800080"];

//Tool choices
let gridLines = 0;
const toggleGrid = document.querySelector("#toggle-grid");
const eraser = document.querySelector("#clear-grid");

//Create size of grid
gridDiv.style.gridTemplateColumns = 'repeat(30, 1fr)';
gridDiv.style.gridTemplateRows = 'repeat(30, 1fr)';
//create color palette
colorTemplate.style.gridTemplateColumns = 'repeat(8, 1fr)';
colorTemplate.style.gridTemplateRows = 'repeat(2, 1fr)';

//Create grid cells
for (let i=0; i<900; i++) { 
    let cell = document.createElement('div');
    cell.classList.add('cell');
    gridDiv.append(cell);
}
const gridCell = document.querySelectorAll(".cell");

//Create color cells
for (let j=0; j<16; j++) {
    let color = document.createElement('div');
    color.classList.add("colors");
    color.style.backgroundColor = "#"+colors[j];
    colorTemplate.append(color);
}
const colorCell = document.querySelectorAll(".colors");

//Event Listeners
toggleGrid.addEventListener("click", () => {
    if (gridLines == 0) {
        gridCell.forEach((e) => {
            e.style.borderTop = "1px solid black";
            e.style.borderRight = "1px solid black";
        });
        gridLines = 1;
    } else {
        gridCell.forEach((e) => {
            e.style.border = "none";
        });
        gridLines = 0;
    }
});

eraser.addEventListener("click", () => {
    gridCell.forEach((e) => {
        e.style.backgroundColor = "#fff";
    });
});

gridCell.forEach((cell) => {
    cell.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = color;
    });
});

colorCell.forEach((cell) => {
    cell.addEventListener("click", (e) => {
        color = e.target.style.backgroundColor;
        currentColor.style.backgroundColor = color;
    });
});





