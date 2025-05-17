console.log("https://leetcode.com/problems/sort-colors/");
console.log("Sort Colors");

export function sortColors(nums) {
  let n = nums.length;
  let left = 0,
    mid = 0,
    right = n - 1;

  while (mid <= right) {
    if (nums[mid] === 0) {
      swap(nums, left, mid);
      left++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
      // swap(nums, left, mid)
    } else if (nums[mid] === 2) {
      swap(nums, right, mid);
      right--;
    }
  }

  return nums;
}

const swap = (nums, i, j) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
