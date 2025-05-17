console.log(
  "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
);

console.log("Find Minimum in Rotated Sorted Array");

/**
 * @param {number[]} nums
 * @return {number}
 */
export function findMin(nums) {
  const len = nums.length;
  let ans = Number.MAX_SAFE_INTEGER;
  let start = 0,
    end = len - 1;

  //1st approach
  // while (start < end) {
  //     let mid = Math.floor((start + end) / 2);
  //     if(nums[mid] <= nums[end]){
  //         end = mid;
  //     }else{
  //         start = mid+1;
  //     }
  // }

  // return nums[start];

  //2nd approach
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] >= nums[start]) {
      ans = Math.min(nums[start], ans);
      start = mid + 1;
    } else {
      ans = Math.min(nums[mid], ans);
      end = mid - 1;
    }
  }

  return ans;
}

console.log("Find Maximum in Rotated Sorted Array");
// Maximum element in a sorted and rotated array
function findMax(arr) {
  let lo = 0,
    hi = arr.length - 1;

  while (lo < hi) {
    // If the current subarray is already sorted,
    // the maximum is at the hi index
    if (arr[lo] <= arr[hi]) {
      return arr[hi];
    }

    let mid = Math.floor((lo + hi) / 2);

    // The left half is sorted, the maximum must
    // be either arr[mid] or in the right half.
    if (arr[mid] > arr[lo]) {
      lo = mid;
    } else {
      hi = mid - 1;
    }
  }

  return arr[lo];
}

const arr = [7, 8, 9, 10, 1, 2, 3, 4, 5];
console.log(findMax(arr));
