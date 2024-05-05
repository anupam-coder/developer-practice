const gridEl = document.querySelector(".grid");

class TicTacToe {
  constructor(rootEl, gridSize = 3) {
    this.gridSize = gridSize;
    this.rootEl = rootEl;
    this.currentPlayer = "X";
    this.winner = null;
    this.grid = [];
    this.cellFilled = 0;
    this.showGrid();
    this.addEventListeners();
  }

  showGrid() {
    this.rootEl.appendChild(this.createGrid());
    const elements = this.rootEl.children;
    for (let i = 0; i < this.gridSize; i++) {
      this.grid[i] = Array.from(elements).slice(
        i * this.gridSize,
        i * this.gridSize + this.gridSize
      );
    }
  }

  createGrid() {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        const cell = document.createElement("button");
        cell.classList.add("cell");
        cell.dataset.x = i;
        cell.dataset.y = j;
        fragment.appendChild(cell);
      }
    }
    return fragment;
  }

  addEventListeners() {
    this.rootEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("cell") && this.winner === null) {
        this.play(e.target);
      }
    });
  }

  play(cell) {
    if (cell.textContent === "") {
      this.set(cell.dataset.x, cell.dataset.y, this.currentPlayer);
      this.cellFilled += 1;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
        this.winnerCallback?.(this.winner);
        return;
      } else if (this.cellFilled === this.gridSize * this.gridSize) {
        this.winner = "Draw";
        this.winnerCallback?.(this.winner);
        return;
      }
      this.changePlayer();
    }
  }

  changePlayer() {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
  }

  set(row, col, value) {
    this.grid[row][col].textContent = value;
  }

  checkWinner() {
    return (
      this.isRowHasWinner(0) ||
      this.isRowHasWinner(1) ||
      this.isRowHasWinner(2) ||
      this.isColHasWinner(0) ||
      this.isColHasWinner(1) ||
      this.isColHasWinner(2) ||
      this.checkDiagonal() ||
      this.checkDiagonalReverse()
    );
  }

  isRowHasWinner(row) {
    const value = this.grid[row][0].textContent;
    if (this.grid[row].every((v) => v.textContent === value)) {
      return value;
    }
    return false;
  }

  isColHasWinner(col) {
    const value = this.grid[0][col].textContent;
    if (
      this.grid.map((row) => row[col]).every((v) => v.textContent === value)
    ) {
      return value;
    }
    return false;
  }

  checkDiagonal() {
    const value = this.grid[0][0].textContent;
    for (let i = 0; i < this.grid.length; i++) {
      if (this.grid[i][i].textContent !== value) {
        return false;
      }
    }
    return value;
  }

  checkDiagonalReverse() {
    const value = this.grid[0][2].textContent;
    for (let i = 0; i < this.grid.length; i++) {
      if (this.grid[i][this.grid.length - 1 - i].textContent !== value) {
        return false;
      }
    }
    return value;
  }

  reset() {
    this.grid.forEach((row) => {
      row.forEach((cell) => {
        cell.textContent = "";
      });
    });
    this.currentPlayer = "X";
    this.winner = null;
    this.cellFilled = 0;
  }
}

const ticktactoe = new TicTacToe(gridEl);

ticktactoe.winnerCallback = (winner) => {
  switch (winner) {
    case "X":
      document.getElementById("winner").textContent = "Player X won!";
      break;
    case "O":
      document.getElementById("winner").textContent = "Player O won!";
      break;
    default:
      document.getElementById("winner").textContent = "Draw!";
  }
};

document.getElementById("reset").addEventListener("click", () => {
  ticktactoe.reset();
  document.getElementById("winner").textContent = "";
});
