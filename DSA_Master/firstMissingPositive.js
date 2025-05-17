console.log("First Missing Positive Number");
console.log("https://leetcode.com/problems/first-missing-positive/");

/**
 * @param {number[]} nums
 * @return {number}
 */
export function firstMissingPositive(nums) {
  //const len = nums.length;
  //let n = 1;
  // nums.sort((a,b) => a-b);
  // for(let i=0;i<len;i++){
  //     if(nums[i] === n){
  //         n++;
  //     }
  // }
  //return n;
  // while(true){
  //     if(nums.includes(n)){
  //         n++;
  //     }else{
  //         return n;
  //     }
  // }

  const n = nums.length;

  // Step 1: Rearrange numbers to their correct positions
  for (let i = 0; i < n; i++) {
    // While the current number is in the range [1, n] and not in its correct position
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      // Calculate the correct index for nums[i]
      const correctIndex = nums[i] - 1;

      // Swap nums[i] with the number at its correct position
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    }
  }

  // Step 2: Identify the first missing positive number
  for (let i = 0; i < n; i++) {
    // If the number at index i is not equal to i + 1, return i + 1
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // If all numbers from 1 to n are present, the missing number is n + 1
  return n + 1;
}
