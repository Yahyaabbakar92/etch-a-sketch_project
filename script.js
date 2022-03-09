const container = document.getElementById("grid-container");
const resetBtn = document.getElementById("reset");

function newGrid() {
  resetBtn.addEventListener("click", function () {
    let squares = prompt("Please enter the number of squares?");
    console.log(squares);
  });
}

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid-item");

    grid.addEventListener("mouseover", function () {
      grid.setAttribute("style", "background-color:red; transition:0.4s");
    });
    container.appendChild(grid);
  }
}

createGrid();
newGrid();
