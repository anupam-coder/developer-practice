// Given a positive number n you can either add or subtract 2^i in a single operation where i>=0 Determine minmun no. of operations needed to reduce n to 0
// e.g n=5, --> 5 - 2^0 --> 4 - 2^2 = 0 so answer is 2 here
// Similarly for n=21, 21 - 2^0 --> 20- 2^2 --> 16 - 2^4 = 0 so answe is 3 here

function minOperations(n) {
  let visited = new Set(); // To avoid repeating the same number
  let queue = [{ value: n, steps: 0 }]; // BFS queue initialized with the start number

  while (queue.length > 0) {
    let { value, steps } = queue.shift(); // Get the next number to explore

    if (value === 0) return steps; // Found a solution!

    if (visited.has(value)) continue; // Skip already-visited numbers
    visited.add(value);

    for (let i = 0; 1 << i <= Math.abs(value); i++) {
      queue.push({ value: value - (1 << i), steps: steps + 1 });
      queue.push({ value: value + (1 << i), steps: steps + 1 });
    }
  }

  return -1; // Should not reach here for positive integers
}

console.log(minOperations(5)); // Output: 2
console.log(minOperations(21)); // Output: 3

/*

Example: n = 5
Start with 5

Try 5 ± 1, 5 ± 2, 5 ± 4

So we generate: 4, 6, 3, 7, 1, 9

Next level: try operations on those numbers

Eventually we reach 0 in 2 steps: 5 → 4 → 0 or 5 → 1 → 0

*/
