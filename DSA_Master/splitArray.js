console.log("Similar to allocate books, painter partition problem");
console.log("https://leetcode.com/problems/split-array-largest-sum/");
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export function splitArray(nums, k) {
  const len = nums.length;
  if (k > len) return -1;
  let low = Math.max(...nums);
  let high = nums.reduce((acc, el) => (acc += el));
  // for(let i=low;i<=high;i++){
  //     let count = calcCount(nums,i);
  //     if(count === k){
  //         return i;
  //     }
  // }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let count = calcCount(nums, mid);
    if (count > k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;

  // Helper function to calculate how many subarrays we would split the array into, given a maximum sum 'val'.
  function calcCount(nums, val) {
    let splitCnt = 1; // Start with 1 subarray
    let total = 0; // Track the sum of elements in the current subarray

    // Iterate through the array and check how many subarrays we can form without exceeding 'val' as the max sum.
    for (let i = 0; i < len; i++) {
      if (total + nums[i] <= val) {
        // If adding the current element doesn't exceed 'val', add it to the current subarray sum
        total += nums[i];
      } else {
        // If it exceeds 'val', start a new subarray and reset the sum to the current element
        splitCnt++;
        total = nums[i];
      }
    }

    // Return the total number of subarrays formed
    return splitCnt;
  }
}

/*
export function splitArray(nums, k) {
  const len = nums.length;
  
  // If k is greater than the length of the array, return -1 since it's not possible to split
  if (k > len) return -1;

  // Initialize low and high bounds for binary search:
  // 'low' is set to the largest number in the array, as we can't split into subarrays with a sum less than the largest number.
  let low = Math.max(...nums);

  // 'high' is the total sum of all elements, which represents the upper bound of possible subarray sums.
  let high = nums.reduce((acc, el) => (acc += el));

  // We are going to use binary search to find the smallest possible sum that allows splitting into 'k' subarrays.
  while (low <= high) {
    // 'mid' represents the current sum being tested in the binary search
    let mid = Math.floor((low + high) / 2);

    // Calculate how many subarrays would result if we try splitting with 'mid' as the maximum sum allowed per subarray
    let count = calcCount(nums, mid);

    // If the count of subarrays is more than k, it means we need a larger sum for each subarray, so adjust the lower bound.
    if (count > k) {
      low = mid + 1;
    } else {
      // If the count is less than or equal to k, we try reducing the max sum by adjusting the upper bound.
      high = mid - 1;
    }
  }

  // The optimal sum that allows splitting into exactly 'k' subarrays is stored in 'low' at the end of the binary search
  return low;

  // Helper function to calculate how many subarrays we would split the array into, given a maximum sum 'val'.
  function calcCount(nums, val) {
    let splitCnt = 1; // Start with 1 subarray
    let total = 0;    // Track the sum of elements in the current subarray

    // Iterate through the array and check how many subarrays we can form without exceeding 'val' as the max sum.
    for (let i = 0; i < len; i++) {
      if (total + nums[i] <= val) {
        // If adding the current element doesn't exceed 'val', add it to the current subarray sum
        total += nums[i];
      } else {
        // If it exceeds 'val', start a new subarray and reset the sum to the current element
        splitCnt++;
        total = nums[i];
      }
    }

    // Return the total number of subarrays formed
    return splitCnt;
  }
}

*/
