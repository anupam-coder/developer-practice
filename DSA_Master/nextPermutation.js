// This function rearranges the numbers to the next permutation in place.
console.log("Next permutation solved");
console.log("https://leetcode.com/problems/next-permutation/description/");
export function nextPermutation(nums) {
  let n = nums.length; // Get the length of the array

  // Step 1: Find the first decreasing element (pivot)
  let i = n - 2; // Start from the second-to-last element
  let j = i + 1; // j will be the next element after i

  // Find the first element that is less than its next element from right to left
  while (nums[i] >= nums[i + 1]) {
    i--; // Move left until we find a decrease
  }

  // Step 2: If i >= 0, there's a valid element to increase
  if (i >= 0) {
    // Step 3: Find the element in the suffix that is just larger than nums[i]
    j = n - 1; // Start from the end of the array
    while (nums[i] >= nums[j]) {
      j--; // Move left until we find a number larger than nums[i]
    }

    // Step 4: Swap the found element with nums[i]
    swap(nums, i, j); // Swap nums[i] and nums[j]
  }

  // Step 5: Reverse the suffix from i+1 to the end
  reverse(nums, i + 1, n - 1); // Reverse the subarray after i to get the smallest permutation
}

// Helper function to reverse the elements between indices i and j
function reverse(nums, i, j) {
  while (j > i) {
    swap(nums, i, j); // Swap elements at i and j
    i++; // Move i to the right
    j--; // Move j to the left
  }
}

// Helper function to swap elements in the array at indices i and j
function swap(nums, i, j) {
  let temp = nums[i]; // Temporarily store nums[i]
  nums[i] = nums[j]; // Replace nums[i] with nums[j]
  nums[j] = temp; // Replace nums[j] with the original nums[i]
}
