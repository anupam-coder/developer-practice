console.log("Subarray Sum Equals K");
console.log("https://leetcode.com/problems/subarray-sum-equals-k/");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export function subarraySum(nums, k) {
  const len = nums.length;
  let sum = 0,
    count = 0;
  // for(let i=0;i<len;i++){
  //     sum=0;
  //     for(let j=i;j<len;j++){
  //         sum += nums[j]
  //         if(sum === k){
  //             count++;
  //         }
  //     }
  // }
  // Create a hashmap to store the frequency of each sum encountered so far
  // We start by initializing it with the sum 0 having a frequency of 1 to handle the edge case where the subarray sum equals k directly from the start.
  let hashMap = new Map();
  hashMap.set(0, 1);

  // Iterate through each element in the nums array
  for (const el of nums) {
    // Add the current element to the cumulative sum
    sum += el;

    // Check if (sum - k) is present in the hashmap.
    // If it is, it means there is a subarray whose sum equals k
    // because (sum - k) indicates a previously seen cumulative sum where the difference with the current sum gives k
    if (hashMap.has(sum - k)) {
      // Add the frequency of (sum - k) to the count.
      // This tells us how many subarrays have this sum
      count += hashMap.get(sum - k);
    }

    // Update the hashmap with the current cumulative sum
    // If this sum has appeared before, increase its frequency, otherwise, set it to 1.
    hashMap.set(sum, (hashMap.get(sum) ?? 0) + 1);

    // Optional: logging the hashmap for debugging or visualization purposes
    console.log(hashMap);
  }

  // Return the total count of subarrays whose sum equals k
  return count;
}
