console.log("https://leetcode.com/problems/jump-game-ii/");
console.log("Jump Game II");

/**
 * @param {number[]} nums
 * @return {number}
 */
export function jump(nums) {
  const n = nums.length;

  // Number of jumps needed to reach the end
  let jumps = 0;

  // Left and right boundaries of the current level (window of positions we can reach with current jumps)
  let l = 0;
  let r = 0;

  // Loop until we reach or go beyond the last index
  while (r < n - 1) {
    let farthest = 0;

    // Within the current window (l to r), find the farthest index we can reach in the next jump
    for (let i = l; i <= r; i++) {
      farthest = Math.max(farthest, i + nums[i]);
    }

    // Move to the next level: update the window for the next jump
    l = r + 1;
    r = farthest;

    // We made one more jump
    jumps += 1;
  }

  // Return the minimum number of jumps needed
  return jumps;

  //using recursion
  /*
// Recursive function to find the minimum number of jumps to reach the end
function minJumps(index, jumps) {
    const n = nums.length; // Total length of the array

    // Base Case: If the current index is at or beyond the last index, 
    // we've reached the end or passed it — so return the number of jumps taken
    if (index >= n - 1) {
        return jumps;
    }

    // Initialize the minimum number of jumps to a very large number
    // This will help us find the smallest value in the loop below
    let min = Number.MAX_SAFE_INTEGER;

    // Loop through all possible jumps from the current index (1 to nums[index])
    for (let i = 1; i <= nums[index]; i++) {
        // Recursively calculate the min jumps from the new position (index + i)
        // and increment the jump count by 1
        min = Math.min(min, minJumps(index + i, jumps + 1));
    }

    // Return the minimum number of jumps found for this path
    return min;
}

// Start the recursive process from index 0 with 0 jumps made so far
return minJumps(0, 0);

   */
}
