console.log("Median of Two Sorted Arrays");
console.log("https://leetcode.com/problems/median-of-two-sorted-arrays/");

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export function findMedianSortedArrays(nums1, nums2) {
  /*
    const arr = [...nums1, ...nums2];
    arr.sort((a, b) => a - b);
    const len = arr.length;
    if (len % 2 === 0) {
        let id = len/2;
        return ((arr[id]+arr[id-1])/2);
    } else {
        return arr[Math.floor(len/2)];
    }
    */

  const mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      mergedArr.push(nums1[i++]);
    } else {
      mergedArr.push(nums2[j++]);
    }
  }

  while (i < nums1.length) {
    mergedArr.push(nums1[i++]);
  }

  while (j < nums2.length) {
    mergedArr.push(nums2[j++]);
  }

  let mid = Math.floor(mergedArr.length / 2);
  if (mergedArr.length % 2 === 0) {
    return (mergedArr[mid] + mergedArr[mid - 1]) / 2;
  } else {
    return mergedArr[mid];
  }
}
