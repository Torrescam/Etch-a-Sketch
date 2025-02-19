const buttonContainer = document.querySelector(".button-container");
const popupButton = document.createElement("button");
popupButton.classList.add("popup-button");
popupButton.textContent = "Size";
buttonContainer.appendChild(popupButton);

const containerSize = 700;
const mainContainer = document.querySelector(".main-container");
const gridContainer = document.querySelector(".container");

let currentDrawingMode = null; //keeps track of the last selected mode

//function to set the drawing mode
function drawingMode(colorFunction) {
  const squares = document.querySelectorAll(".square");
  //remove any previous event before assigning a new one
  squares.forEach((square) => {
    square.onmouseover = null;
    square.onmouseover = () => {
      square.style.backgroundColor = colorFunction();
    };
  });
}

//Random color button
const randomColor = document.querySelector("#random-color");
randomColor.addEventListener("click", () => {
  drawingMode(getRandomRGB);
});

//Pencil(black) color button
const pencilColor = document.querySelector("#pencil-color");
pencilColor.addEventListener("click", () => {
  currentDrawingMode = () => "#4A4A4A";
  drawingMode(() => "#4A4A4A");
});

//Generate random RGB color
function getRandomRGB() {
  return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

//set the main container size
function setContainerSize() {
  if (mainContainer) {
    mainContainer.style.width = `${containerSize + 100}px`;
    mainContainer.style.height = `${containerSize + 100}px`;
  }

  gridContainer.style.width = `${containerSize}px`;
  gridContainer.style.height = `${containerSize}px`;
}
setContainerSize();

//Show the size selction dropdown
function selectShows() {
  const selectElement = document.querySelector("#size");
  selectElement.style.display = "flex";
}
popupButton.addEventListener("click", selectShows);

// create the grid with the selected size
function createGrid(rows, cols) {
  gridContainer.innerHTML = ""; // cleaar previus grid

  let squareSize = Math.floor(containerSize / Math.max(rows, cols));
  let squares = document.createDocumentFragment();

  for (let i = 0; i < rows * cols; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    squares.appendChild(square);
  }
  gridContainer.appendChild(squares);

  if (currentDrawingMode) {
    drawingMode(currentDrawingMode); // Apply the current mode after resizing
  }
}
// retain the last selected color after resizing the grid
randomColor.addEventListener("click", () => {
  currentDrawingMode = getRandomRGB;
  drawingMode(getRandomRGB);
});

//handle size Selection from dropdown
function selectSize() {
  const selectElement = document.querySelector("#size");
  const countSizes = selectElement.value;
  const [rows, cols] = countSizes.split("x").map(Number);
  createGrid(rows, cols);
  selectElement.style.display = "none";

  if (currentDrawingMode) {
    drawingMode(currentDrawingMode); //Retain previous color choice
  }
}

document.querySelector("#size").addEventListener("change", selectSize);

// Erase the drawing
document.addEventListener("DOMContentLoaded", function () {
  function eraseEtchSketch() {
    const Eraisegrid = document.querySelectorAll(".square"); //fix variable name
    Eraisegrid.forEach((square) => {
      square.style.backgroundColor = "";
    });
  }
  const buttonErase = document.querySelector(".button-erase");
  buttonErase.addEventListener("click", eraseEtchSketch);
});
