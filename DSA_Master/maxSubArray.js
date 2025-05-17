console.log("Maximum Subarray");
console.log("https://leetcode.com/problems/maximum-subarray/description/");

/**
 * @param {number[]} nums
 * @return {number}
 */
export function maxSubArray(nums) {
  const len = nums.length;
  let currentSum = 0,
    maxSum = nums[0];
  // for (let i = 0; i < len; i++) {
  //     sum = nums[i];
  //     maxSum = Math.max(sum, maxSum)
  //     for (let j = i + 1; j < len; j++) {
  //         sum += nums[j];
  //         maxSum = Math.max(sum, maxSum)
  //     }
  // }

  //Kadane's algorithm

  for (let i = 0; i < len; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
