const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
const squares = document.createElement("div");
squares.classList.add("square");
squares.setAttribute(
  "style",
  "border: solid 2px; max-width: 50px; height: 50px"
);
grid.appendChild(squares);

grid.setAttribute(
  "style",
  "border: 5mm ridge rgba(83, 105, 172, .8); max-width: 50rem; height: 50rem"
);

squares.addEventListener("click", addColor);

function addColor() {
  console.log("black");
}
