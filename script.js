const container = document.getElementById("grid-container");
const newGridBtn = document.getElementById("reset");
const body = document.querySelector("body");

//The function to create the default 16X16 grid
function createGrid() {
  for (let i = 0; i < 256; i++) {
    //Creating and appending new divs into the container
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.setAttribute(
      "style",
      "grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);"
    );

    div.addEventListener("mouseover", function () {
      div.setAttribute("style", "background-color:gray; transition:0.4s");
    });
    container.appendChild(div);
  }
}

//The function when the button is pressed to generate a new grid
function userInput() {
  newGridBtn.addEventListener("click", function () {
    let squares = prompt("Please enter the number of squares?");
    console.log(squares); //here just to see what will print out in the console
    //The function to remove the default grid
    container.remove();
    //Creating a new container that will replace the default grid
    const newContainer = document.createElement("div");
    newContainer.classList.add("grid-container");
    body.appendChild(newContainer);
    //The step that will generate new divs to append to the new container
    for (let i = 0; i < squares * squares; i++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("new-grid-item");
      newContainer.setAttribute(
        "style",
        `grid-template-columns: repeat(${squares}, 1fr); grid-template-rows: repeat(${squares}, 1fr);`
      );

      newDiv.addEventListener("mouseover", function () {
        newDiv.setAttribute("style", "background-color:gray; transition:0.4s");
      });
      newContainer.appendChild(newDiv);
    }
  });
}

createGrid();
userInput();
