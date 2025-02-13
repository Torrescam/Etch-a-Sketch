function createGrid(rows, cols) {
  const containerSize = 900;

  const gridContainer = document.querySelector(".container");

  gridContainer.innerHTML = "";
  gridContainer.style.width = `${containerSize}px`;
  gridContainer.style.height = `${containerSize}px`;

  let squareSize = Math.floor(containerSize / Math.max(rows, cols));
  let squares = document.createDocumentFragment();

  for (let i = 0; i < rows * cols; i++) {
    const square = document.createElement("div");
    square.className = "square";

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "#eae2b7";
    });
    squares.appendChild(square);
  }
  gridContainer.appendChild(squares);
}
createGrid(100, 100);
