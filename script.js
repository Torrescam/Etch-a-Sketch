function createGrid(rows, cols) {
  const gridContainer = document.querySelector(".container");
  let squares = document.createDocumentFragment();

  for (let i = 0; i < rows * cols; i++) {
    const square = document.createElement("div");
  
    square.className = "square";
    squares.appendChild(square);
  }
  gridContainer.appendChild(squares);
}

createGrid(16, 16)