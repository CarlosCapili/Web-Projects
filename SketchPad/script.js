const gridDiv = document.querySelector(".grid");

//Color choices 
const colorTemplate = document.querySelector(".colorTemplate");
const colors = ["FFFFFF", "C0C0C0", "808080", "000000", 
                "FF0000", "800000", "FFFF00", "808000",
                "00FF00", "008000", "00FFFF", "008080",
                "0000FF", "000080", "FF00FF", "800080"];

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

gridCell.forEach((cell) => {
    cell.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "black";
    });
});

colorCell.forEach((cell) => {
    cell.addEventListener("click", changeColor);
});

function changeColor(e) {
    console.log(e.target.style.backgroundColor);
}



