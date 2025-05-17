// ✅ Flood Fill Implementation in JavaScript

function floodFill(image, sr, sc, newColor) {
  const rows = image.length;
  const cols = image[0].length;
  const colorToReplace = image[sr][sc];

  if (colorToReplace === newColor) return image; // No need to fill

  function dfs(r, c) {
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      image[r][c] !== colorToReplace
    ) {
      return;
    }

    image[r][c] = newColor;

    // Recursively apply to 4 directions
    dfs(r + 1, c); // down
    dfs(r - 1, c); // up
    dfs(r, c + 1); // right
    dfs(r, c - 1); // left
  }

  dfs(sr, sc);
  return image;
}

const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

const sr = 1,
  sc = 1,
  newColor = 2;

const result = floodFill(image, sr, sc, newColor);
console.log(result);
