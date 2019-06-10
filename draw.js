const defaultWidth = 16;
const defaultHeight = 16;

const minWidth = 5;
const minHeight = 5;

const gridWidth = 360;
const gridHeight = 360;

/*
** Width: number of elements on horizontal axis
** Height: number of elements on vertical axis
*/

function createNewGrid() {
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);
    
    if (isNaN(width) || width < minWidth) {
        width = defaultWidth;
    }
    if (isNaN(height) || height < minHeight) {
        height = defaultHeight;
    }

    console.log(`${width} ${height}`);

    generateGrid(width, height);
}

function generateGrid(width, height) {
    // calculcate size for an element
    const elementWidth = gridWidth / width;
    const elementHeight = gridHeight / height;
    console.log(`${width} ${height}`);

    // remove old elements
    emptyGrid();

    // generate grid
    let grid = document.querySelector(".grid");
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let element = document.createElement("div");
            element.classList.add("grid-element");
            element.style.width = elementWidth + "px";
            element.style.height = elementHeight + "px";
            grid.appendChild(element);

            element.addEventListener("mouseover", function(e) {
                element.classList.add("drawn");
            });
        }
    }
}

function emptyGrid() {
    let grid = document.querySelector(".grid");
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
}

function clearGrid() {
    let elements = Array.from(document.querySelector(".grid").children);
    elements.forEach(e => e.classList.remove("drawn"));
}