// const container = document.querySelector("#container");
// const grid = document.querySelector(".grid");
// const squares = document.createElement("div");
// squares.classList.add("square");
// squares.setAttribute(
//   "style",
//   "border: solid 2px; max-width: 50px; height: 50px"
// );
// grid.appendChild(squares);

// grid.setAttribute(
//   "style",
//   "border: 5mm ridge rgba(83, 105, 172, .8); max-width: 50rem; height: 50rem"
// );

// squares.addEventListener("click", addColor);

// function addColor() {
//   squares.setAttribute(
//     "style",
//     "border: solid 2px; max-width: 50px; height: 50px; background-color: black"
//   );
// }

const container = document.getElementById("grid-container");
const resetBtn = document.getElementById("reset");

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid-item");
    container.appendChild(grid);
  }
}

createGrid();
