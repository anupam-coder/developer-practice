console.log("Shortest Unsorted Continuous Subarray");
console.log(
  "https://leetcode.com/problems/shortest-unsorted-continuous-subarray/description/"
);

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  // let temp = [...nums];
  // temp.sort((a,b) => a-b);
  // let res = [];
  // for(let i=0;i<nums.length;i++){
  //     if(nums[i] !== temp[i]){
  //         res.push(i);
  //     }
  // }

  // if(res.length){
  //     return (res[res.length-1] - res[0] + 1);
  // }

  // return 0;

  // Initialize variables to keep track of the left and right boundaries of the unsorted subarray.
  // left and right are initialized to -1, meaning no unsorted subarray has been identified yet.
  let left = -1,
    right = -1;

  // Initialize maxSoFar to the first element of the array and minSoFar to the last element of the array.
  // maxSoFar will track the maximum element encountered as we scan from left to right.
  // minSoFar will track the minimum element encountered as we scan from right to left.
  let maxSoFar = nums[0],
    minSoFar = nums[nums.length - 1];

  // Step 1: Find the right boundary of the unsorted subarray
  // Traverse the array from left to right to find the rightmost element that is out of order.
  for (let i = 0; i < nums.length; i++) {
    // If the current element is smaller than maxSoFar, it is out of order,
    // so update the right boundary (this element is part of the unsorted subarray).
    if (nums[i] < maxSoFar) {
      right = i; // Update the right boundary to the current index.
    } else {
      // If the current element is greater than or equal to maxSoFar, update maxSoFar.
      maxSoFar = nums[i]; // maxSoFar is updated to the current element because it's the new maximum.
    }
  }

  // Step 2: Find the left boundary of the unsorted subarray
  // Traverse the array from right to left to find the leftmost element that is out of order.
  for (let i = nums.length - 1; i >= 0; i--) {
    // If the current element is greater than minSoFar, it is out of order,
    // so update the left boundary (this element is part of the unsorted subarray).
    if (nums[i] > minSoFar) {
      left = i; // Update the left boundary to the current index.
    } else {
      // If the current element is smaller than or equal to minSoFar, update minSoFar.
      minSoFar = nums[i]; // minSoFar is updated to the current element because it's the new minimum.
    }
  }

  // If no unsorted subarray is found (left is still -1), it means the array is already sorted.
  // Return 0 in that case, indicating no subarray needs to be sorted.
  if (left === -1) return 0;

  // The length of the unsorted subarray is the difference between the right and left boundaries,
  // plus 1 to include both boundary elements.
  return right - left + 1;
};
