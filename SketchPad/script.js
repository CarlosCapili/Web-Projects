const gridDiv = document.querySelector(".grid");
//Color choices 
let color = "#000";
const colors = ["FFFFFF", "C0C0C0", "808080", "000000", 
                "FF0000", "800000", "FFFF00", "808000",
                "00FF00", "008000", "00FFFF", "008080",
                "0000FF", "000080", "FF00FF", "800080"];
//Tool choices
let gridLines = 1;
const isToggleClicked = document.querySelector("#toggle-grid");
const isEraserClicked = document.querySelector("#clear-grid");
let isMouseDown = false;

randomColor();
createGrid();
createColorTemplate();
setInterval(randomColor, 2000);

//Create grid cells
function createGrid () {
    gridDiv.style.gridTemplateColumns = 'repeat(30, 1fr)';
    gridDiv.style.gridTemplateRows = 'repeat(30, 1fr)';
    for (let i=0; i<900; i++) { 
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridDiv.appendChild(cell);
    }
}
const gridCell = document.querySelectorAll(".cell");
toggleGrid();

//Create color cells
function createColorTemplate() {
    const colorTemplate = document.querySelector("#colorTemplate");
    colorTemplate.style.gridTemplateColumns = 'repeat(8, 1fr)';
    colorTemplate.style.gridTemplateRows = 'repeat(2, 1fr)';
    for (let j=0; j<16; j++) {
        let color = document.createElement('div');
        color.classList.add("colors");
        color.style.backgroundColor = "#"+colors[j];
        colorTemplate.appendChild(color);
    }
}

const colorCell = document.querySelectorAll(".colors");

function changeColor() {
    const currentColor = document.querySelector("#currentColor");
    color = this.style.backgroundColor;
    currentColor.style.backgroundColor = color;
}

function MouseClicked() {
    isMouseDown = true;
    this.style.backgroundColor = color;
}

function MouseUnclicked() {
    isMouseDown = false;
}

function fillColor() {
    if (isMouseDown) {
        this.style.backgroundColor = color;
    }
}

function randomColor() {
    const titleColor = document.querySelectorAll(".multicolor");
    titleColor.forEach((e) => {
        e.style.color = "#"+colors[Math.floor((Math.random()*(16-4+1))+4)];
    });
}

function toggleGrid() {
    if (gridLines == 1) {
        gridCell.forEach((e) => {
            e.style.borderTop = "1px solid black";
            e.style.borderRight = "1px solid black";
        });
        gridLines = 0;
    } else {
        gridCell.forEach((e) => {
            e.style.border = "none";
        });
        gridLines = 1;
    }
}

function clearGrid() {
    gridCell.forEach((e) => {
        e.style.backgroundColor = "#fff";
    });
}

//Event Listeners
isToggleClicked.addEventListener("click", toggleGrid);
isEraserClicked.addEventListener("click", clearGrid);
gridDiv.addEventListener("mouseenter", MouseUnclicked);
gridCell.forEach(cell => cell.addEventListener("mousedown", MouseClicked));
gridCell.forEach(cell => cell.addEventListener("mouseup", MouseUnclicked));
gridCell.forEach(cell => cell.addEventListener("mouseenter", fillColor));
colorCell.forEach(cell => cell.addEventListener("click", changeColor));





