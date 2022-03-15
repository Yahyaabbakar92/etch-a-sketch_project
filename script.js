const container = document.getElementById("grid-container");
const newGridButton = document.getElementById("reset");

//The function to create the default 16X16 grid
function createGrid() {
  container.setAttribute(
    "style",
    "grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);"
  );
  for (let i = 0; i < 256; i++) {
    //Creating and appending the divs to the container
    const div = document.createElement("div");
    div.classList.add("grid-item");

    div.addEventListener("mouseover", function () {
      div.setAttribute("style", "background-color:#808080; transition:0.4s;");
    });
    container.appendChild(div);
  }
}

//The function when the button is pressed to generate a new grid
function upgradeGrid() {
  newGridButton.addEventListener("click", function () {
    let squares = prompt(
      "Please enter a number between 1 and 100 of sides for the grid"
    );

    if (isNaN(squares) || squares === null) {
      prompt("Invalid! Enter a number");
    } else if (squares < 1 || squares > 100) {
      prompt("Invalid number! Enter a number between 1 and 100");
    } else {
      //The function to reset and create a dynamic grid
      container.innerHTML = "";
      container.setAttribute(
        "style",
        `grid-template-columns: repeat(${squares}, 1fr); grid-template-rows: repeat(${squares}, 1fr);`
      );

      //The step that will generate new divs and append them to the container
      for (let i = 0; i < squares * squares; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-item");

        newDiv.addEventListener("mouseover", function () {
          newDiv.setAttribute(
            "style",
            "background-color:#808080; transition:0.4s"
          );
        });
        container.appendChild(newDiv);
      }
    }
  });
}

createGrid();
upgradeGrid();
