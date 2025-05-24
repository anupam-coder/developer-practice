/**
 * Searches for a target value in a rotated sorted array.
 * Uses binary search with logic to detect sorted halves.
 *
 * @param {number[]} nums - The rotated sorted array.
 * @param {number} target - The value to search for.
 * @return {number} - The index of the target, or -1 if not found.
 */

//Best Approach
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  // Continue the loop while the search space is valid
  while (left <= right) {
    // Find the middle index
    const mid = Math.floor((left + right) / 2);

    // If the mid element is the target, return its index
    if (nums[mid] === target) return mid;

    // Determine which half is sorted
    if (nums[left] <= nums[mid]) {
      // Left half is sorted
      if (nums[left] <= target && target < nums[mid]) {
        // Target is in the left half
        right = mid - 1;
      } else {
        // Target is in the right half
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        // Target is in the right half
        left = mid + 1;
      } else {
        // Target is in the left half
        right = mid - 1;
      }
    }
  }

  // Target was not found
  return -1;
};

//My Approach

var search = function (nums, target) {
  const maxEl = Math.max(...nums);
  const maxId = nums.indexOf(maxEl);
  const len = nums.length;

  function helper(left, right) {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  let res = helper(0, maxId);

  return res !== -1 ? res : helper(maxId + 1, len - 1);
};
