console.log(
  "https://leetcode.com/problems/find-the-duplicate-number/?envType=problem-list-v2&envId=eeudwo2i"
);
console.log("Find the Duplicate Number");
/**
 * @param {number[]} nums
 * @return {number}
 */
export function findDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]);
    if (nums[index] < 0) {
      return Math.abs(nums[i]);
    } else {
      nums[index] *= -1;
    }
  }
  return -1;
}
