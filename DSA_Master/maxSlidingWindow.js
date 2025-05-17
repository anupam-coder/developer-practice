console.log("Sliding Window Maximum");
console.log(
  "https://leetcode.com/problems/sliding-window-maximum/description/?envType=problem-list-v2&envId=eeudwo2i"
);
/*
    const len = nums.length;
    const res = [];
    for(let i=0;i<=len-k;i++){
        let max = nums[i];
        for(let j=i;j<=i+k-1;j++){
            max = Math.max(max,nums[j]); 
        }
        res.push(max);
    }
    return res;
    */

/**
 * Function to return the maximum sliding window of size k from the input array nums.
 * @param {number[]} nums - The input array of integers.
 * @param {number} k - The size of the sliding window.
 * @return {number[]} - The array containing the maximum value of each sliding window.
 */
export function maxSlidingWindow(nums, k) {
  // Initialize an empty array to use as a queue (used for tracking the indices of potential maximum values in the window).
  const queue = [];

  // Initialize an empty array to store the results (maximum values of each sliding window).
  const res = [];

  // Get the length of the input array.
  const len = nums.length;

  // Iterate through the array to process each element.
  for (let i = 0; i < len; i++) {
    // Remove elements from the back of the queue if they are less than or equal to the current element.
    // This ensures that the queue only contains indices of elements in decreasing order.
    while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop();
    }

    // Add the current index to the queue (this index could be the maximum value for the current window).
    queue.push(i);

    // If the leftmost element in the queue is out of the window (i.e., its index is <= i - k), remove it from the queue.
    if (queue.length && queue[0] <= i - k) {
      queue.shift();
    }

    // Once we have processed the first k elements, start pushing the maximum value of the window to the result array.
    // The maximum element is always at the front of the queue.
    if (i >= k - 1) {
      res.push(nums[queue[0]]);
    }
  }

  // Return the final result array containing the maximum values of each sliding window.
  return res;
}
