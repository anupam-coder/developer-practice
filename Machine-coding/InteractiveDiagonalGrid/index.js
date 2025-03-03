const gridContainer = document.getElementById("grid");
const resetButton = document.getElementById("reset-btn");
const cells = [];
let lastClicked = null;

const buildGrid = (size) => {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-row", i);
      cell.setAttribute("data-column", j);
      cells.push(cell);
      gridContainer.appendChild(cell);
    }
  }
};

const onClickGrid = (e) => {
  if (!e.target.classList.contains("cell") || e.target === lastClicked) {
    return;
  }

  if (lastClicked) {
    onReset();
  }
  const row = parseInt(e.target.dataset.row);
  const col = parseInt(e.target.dataset.column);
  cells.forEach((cell) => {
    const r = parseInt(cell.dataset.row);
    const c = parseInt(cell.dataset.column);
    if (r + c === row + col || r - c === row - col) {
      cell.style.background = "red";
    }
  });
  e.target.style.backgroundColor = "yellow";
  lastClicked = e.target;
};

const onReset = () => {
  cells.forEach((el) => (el.style.background = ""));
};

function init() {
  const gridSize = 7;
  buildGrid(gridSize);
  grid.addEventListener("click", onClickGrid);
  resetButton.addEventListener("click", onReset);
}

init();
