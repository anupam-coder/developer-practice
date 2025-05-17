console.log("Peak Index in a Mountain Array");
console.log(
  "https://leetcode.com/problems/peak-index-in-a-mountain-array/description/"
);

/**
 * @param {number[]} arr
 * @return {number}
 */
export function peakIndexInMountainArray(arr) {
  // return arr.indexOf(Math.max(...arr));
  const len = arr.length;
  // let low = 0, high = len - 1;
  // while(low <= high){
  //     let mid = Math.floor((low+high)/2);
  //     //console.log(low,high,mid)
  //     if((mid>0 && arr[mid-1] < arr[mid]) && ( mid<len-1 && arr[mid+1] < arr[mid])){
  //         return mid;
  //     }
  //     else if((mid>0 && arr[mid] > arr[mid-1]) || (mid<len-1 && arr[mid] < arr[mid+1])){
  //         low = mid+1;
  //     }
  //     else if((mid>0 && arr[mid] < arr[mid-1]) || (mid<len-1 && arr[mid] > arr[mid+1])){
  //         high = mid-1;
  //     }
  // }

  let left = 0;
  let right = len - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
console.log(
  "https://leetcode.com/problems/find-in-mountain-array/description/"
);
/*
Given a mountain array mountainArr, return the minimum index such that mountainArr.get(index) == target. If such an index does not exist, return -1.
*/
/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
  const len = mountainArr.length();
  let low = 0,
    high = len - 1,
    peakElId = findPeak();
  // Too much of mountainArray.get() calls
  // while (low <= high) {
  //     let mid = low + Math.floor((high - low) / 2);
  //     if ((mid > 0 && mountainArr.get(mid - 1) < mountainArr.get(mid)) && (mid < len - 1 && mountainArr.get(mid + 1) < mountainArr.get(mid))) {
  //         peakElId = mid;
  //         break;
  //     }
  //     else if ((mid > 0 && mountainArr.get(mid - 1) < mountainArr.get(mid)) || (mid < len - 1 && mountainArr.get(mid + 1) > mountainArr.get(mid))) {
  //         low = mid + 1;
  //     } else if ((mid > 0 && mountainArr.get(mid - 1) > mountainArr.get(mid)) || (mid < len - 1 && mountainArr.get(mid + 1) < mountainArr.get(mid))) {
  //         high = mid - 1;
  //     }
  // }
  let result = findTarget(0, peakElId, target, true);
  if (result === -1) {
    return findTarget(peakElId + 1, len - 1, target, false);
  } else {
    return result;
  }

  function findPeak() {
    let left = 0; // Initialize the left boundary of the search space
    let right = len - 1; // Initialize the right boundary of the search space

    // Perform binary search within the array
    while (left < right) {
      // Calculate the middle index of the current search space
      const mid = left + Math.floor((right - left) / 2);

      // If the element at mid is less than the element at mid+1,
      // it means the peak lies on the right side of mid.
      // So we move the left boundary to mid + 1
      if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
        left = mid + 1;
      } else {
        // If the element at mid is greater than or equal to the element at mid+1,
        // it means the peak lies at mid or on the left side of mid.
        // So, we move the right boundary to mid
        right = mid;
      }
    }

    // At the end of the while loop, `left` will be pointing to the peak element
    return left;
  }

  function findTarget(left, right, target, isAscending) {
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      const midVal = mountainArr.get(mid);
      if (midVal === target) {
        return mid;
      }
      //normal binary search
      if (isAscending) {
        if (target > midVal) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      } // reverse binary serach i.e in descending order
      else {
        if (target > midVal) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
    return -1;
  }
};
