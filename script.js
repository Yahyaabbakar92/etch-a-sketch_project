const container = document.getElementById("grid-container");
const resetBtn = document.getElementById("reset");

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid-item");
    container.setAttribute(
      "style",
      "grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);"
    );

    grid.addEventListener("mouseover", function () {
      grid.setAttribute("style", "background-color:red; transition:0.4s");
    });
    container.appendChild(grid);
  }
}

function userInput() {
  resetBtn.addEventListener("click", function () {
    let squares = prompt("Please enter the number of squares?");
    console.log(squares);

    for (let i = 0; i < squares * squares; i++) {
      const div = document.createElement("div");
      div.classList.add("new-grid-item");
      container.setAttribute(
        "style",
        `grid-template-columns: repeat(${squares}, 1fr); grid-template-rows: repeat(${squares}, 1fr);`
      );

      div.addEventListener("mouseover", function () {
        div.setAttribute("style", "background-color:red; transition:0.4s");
      });
      container.appendChild(div);
    }
  });
}

createGrid();
userInput();
