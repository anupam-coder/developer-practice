/*
79. Word Search
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

*/

var exist = function (board, word) {
  // Get the number of rows and columns in the board
  const rows = board.length;
  const cols = board[0].length;
  // A set to keep track of visited cells during DFS
  const visited = new Set();

  // Depth-First Search function
  // r, c => current position in the grid
  // k => current index in the word we're trying to match
  const dfs = (r, c, k) => {
    // Base case: if all characters are matched
    if (k === word.length) {
      return true;
    }

    // Boundary and constraint checks:
    // - Out of bounds
    // - Already visited
    // - Current cell doesn't match the current character in the word
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      visited.has(`${r},${c}`) ||
      board[r][c] !== word[k]
    ) {
      return false;
    }

    // Mark the cell as visited
    visited.add(`${r},${c}`);

    // Explore all four possible directions (down, up, right, left)
    const res =
      dfs(r + 1, c, k + 1) || // down
      dfs(r - 1, c, k + 1) || // up
      dfs(r, c + 1, k + 1) || // right
      dfs(r, c - 1, k + 1); // left

    // Backtrack: unmark the cell as visited for the next path
    visited.delete(`${r},${c}`);

    return res;
  };

  // Try to find the word starting from each cell in the grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) return true; // Start DFS if first letter matches
    }
  }

  // If no path found that matches the word, return false
  return false;
};
