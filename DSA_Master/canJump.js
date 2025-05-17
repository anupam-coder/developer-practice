console.log("Jump Game");
console.log("https://leetcode.com/problems/jump-game/");

/**
 * @param {number[]} nums
 * @return {boolean}
 */
export function canJump(nums) {
  let maxFind = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxFind) {
      return false;
    }
    maxFind = Math.max(maxFind, i + nums[i]);
  }
  return true;
}
