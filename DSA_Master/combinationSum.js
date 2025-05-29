/**
 * 
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
 * @param {number[]} candidates - Array of distinct integers
 * @param {number} target - The target sum we need to achieve
 * @return {number[][]} - A list of all unique combinations where the chosen numbers sum to target
 */
export function combinationSum(candidates, target) {
  let res = []; // To store all valid combinations
  const len = candidates.length; // Length of the candidates array

  // Depth-First Search (DFS) helper function
  function dfs(i, target, stack) {
    // Base case: if the target becomes zero, we've found a valid combination
    if (target === 0) {
      res.push([...stack]); // Push a copy of the current stack to the result
      return;
    }

    // Base case: if we've considered all candidates or the target becomes negative
    if (i === len || target < 0) {
      return;
    }

    // Include candidates[i] in the current combination
    if (candidates[i] <= target) {
      stack.push(candidates[i]); // Add current candidate to the combination
      dfs(i, target - candidates[i], stack); // Recursively call with the same index (allowing unlimited usage)
      stack.pop(); // Backtrack to explore other possibilities
    }

    // Exclude candidates[i] and move to the next candidate
    dfs(i + 1, target, stack);
  }

  // Start DFS from index 0 with an empty stack
  dfs(0, target, []);
  return res; // Return all valid combinations
}
