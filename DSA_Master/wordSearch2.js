const findWords = (board, words) => {
  // Define 4 possible directions to move: up, right, down, left
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  // This will store all words found on the board
  let res = [];

  // Function to build a Trie (prefix tree) from the list of words
  const buildTrie = () => {
    const root = {};
    for (const w of words) {
      let node = root;
      for (const c of w) {
        // Create a new node if the character is not present
        if (node[c] == null) {
          node[c] = {};
        }
        node = node[c];
      }
      // Store the complete word at the end node for easy retrieval
      node.word = w;
    }
    return root;
  };

  // Depth-first search function to explore the board
  const search = (node, x, y) => {
    // If the current Trie node contains a word, we found a word
    if (node.word != null) {
      res.push(node.word); // Add it to the result
      node.word = null; // Avoid duplicate entries of the same word
    }

    // Boundary and validity check
    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return;

    // If the character is not in the current Trie node, return
    if (node[board[x][y]] == null) return;

    // Save the character and mark the cell as visited by using '#'
    const c = board[x][y];
    board[x][y] = "#";

    // Explore all 4 adjacent directions
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      search(node[c], i, j); // Recursive call with next Trie node
    }

    // Restore the character after search to allow reuse
    board[x][y] = c;
  };

  // Build the Trie using the input words
  const root = buildTrie();

  // Start searching from each cell in the board
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      search(root, i, j);
    }
  }

  // Return all found words
  return res;
};

/*
Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
*/
