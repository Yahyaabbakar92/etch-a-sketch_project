const container = document.getElementById("grid-container");
const resetBtn = document.getElementById("reset");

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
