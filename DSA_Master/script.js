import { canJump } from "./canJump.js";
import { checkPossibility } from "./checkPossibility-non-decreasing-array.js";
import { combinationSum } from "./combinationSum.js";
import { findAnagrams } from "./findAnagrams.js";
import { findDuplicate } from "./findDuplicate.js";
import { findMedianSortedArrays } from "./findMedianSortedArrays.js";
import { findMin } from "./findMin.js";
import { firstMissingPositive } from "./firstMissingPositive.js";
import { jump } from "./jump.js";
import { kClosest } from "./kClosest.js";
import { leastInterval } from "./leastInterval.js";
import { longestPalindrome } from "./longestPallindromeString.js";
import { longestSubstring } from "./longestSubstring.js";
import { maxArea } from "./maxAreaWaterContainer.js";
import { maxSlidingWindow } from "./maxSlidingWindow.js";
import { maxSubArray } from "./maxSubArray.js";
import { nextPermutation } from "./nextPermutation.js";
import { peakIndexInMountainArray } from "./peakIndexInMountainArray.js";
import { removeKdigits } from "./removeKdigits.js";
import { sortColors } from "./sortColors.js";
import { splitArray } from "./splitArray.js";
import { subarraySum } from "./subarraySum.js";
import { trap } from "./trapRainWater.js";
import { twoSum } from "./twoSum.js";
import { wordBreak } from "./wordBreak.js";

window.onload = function () {
  // 1. Next Permutation
  // let nums1 = [1, 2, 3],
  //     nums = [2, 1, 3],
  //     nums2 = [3, 2, 1];
  // nextPermutation(nums);
  // console.log(nums, "nextPermutation");
  ///////////////////////////////////////////////////////////////////
  // 2. Sort Colors
  // let nums = [2, 0, 2, 1, 1, 0];
  // sortColors(nums);
  // console.log(nums);
  ///////////////////////////////////////////////////////////////////
  // 3. Two Sum
  // let nums = [2, 7, 11, 15],
  //     target = 9;
  // let res = twoSum(nums, target);
  // console.log(res);
  ///////////////////////////////////////////////////////////////////
  // 4. Longest Palindromic Substring
  // let s = "babad";
  // let res = longestPalindrome(s);
  // console.log(res);
  ///////////////////////////////////////////////////////////////////
  // 5. Word Break
  // let s = "leetcode",
  //     wordDict = ["leet", "code"];
  // // s = "applepenapple", wordDict = ["apple","pen"]
  // // s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
  // let res = wordBreak(s, wordDict);
  // console.log(res);
  ///////////////////////////////////////////////////////////////////
  // 6. Container with Most Water
  // let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  // let res = maxArea(height);
  // console.log(res);
  ///////////////////////////////////////////////////////////////////
  // 7. Longest Substring Without Repeating Characters
  // let s = "pwwkewxwkeq";
  // let res = lengthOfLongestSubstring(s);
  // console.log(res);
  ///////////////////////////////////////////////////////////////////
  /*
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

    Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

    Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
  */
  ///////////////////////////////////////////////////////////////////
  // 8. Check Possibility (Non-decreasing Array)
  // let nums = [4, 2, 3];
  // let res = checkPossibility(nums);
  // console.log(res);
  ///////////////////////////////////////////////////////////////////
  // 9. First Missing Positive
  // let nums = [3, 4, -1, 1];
  // let res = firstMissingPositive(nums);
  // console.log(res);
  ///////////////////////////////////////////////////////////////////
  // 10. Trapping Rain Water
  // let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  // let res = trap(height);
  // console.log(res);
  ///////////////////////////////////////////////////////////////////
  // 11. Maximum Subarray
  // let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  // let res = maxSubArray(nums);
  // console.log(res);
  ///////////////////////////////////////////////////////////////////
  // 12. Peak Index in a Mountain Array
  // let arr = [0, 1, 0];
  // let res = peakIndexInMountainArray(arr);
  // console.log(res);
  ///////////////////////////////////////////////////////////////////
  // 13. Subarray Sum Equals K
  // let nums = [1, 1, 1],
  //     k = 2;
  // let res = subarraySum(nums, k);
  // console.log(res);
  ///////////////////////////////////////////////////////////////////
  // 14. Find All Anagrams in a String
  // let s = "cbaebabacd",
  //     p = "abc";
  // Output: [0, 6]
  // let res = findAnagrams(s, p);
  // console.log(res);
  ///////////////////////////////////////////////////////////////////
  // 15. Longest Substring with At Least K Repeating Characters
  // let s = "aaabb",
  //     k = 3;
  // // s = "ababbc", k = 2
  // let res = longestSubstring(s, k);
  // console.log(res);
  ///////////////////////////////////////////////////////////////////
  // 16. Shortest Unsorted Continuous Subarray
  // let nums = [2, 6, 4, 8, 10, 9, 15];
  // [1,2,3,4], [1]
  // let res = findUnsortedSubarray(nums);
  // console.log(res);
  ///////////////////////////////////////////////////////////////////
  // 17. K Closest Points to Origin
  // let points = [
  //     [1, 3],
  //     [-2, 2],
  //   ],
  //   k = 1;
  //points = [[3,3],[5,-1],[-2,4]], k = 2
  // let res = kClosest(points, k);
  //////////////////////////////////////////////////////////////////
  // 18. Median of Two Sorted Arrays
  // let nums1 = [1,3], nums2 = [2];
  //nums1 = [1,2], nums2 = [3,4]
  // let res = findMedianSortedArrays(nums1, nums2);
  // console.log(res);
  /////////////////////////////////////////////////////////////////
  // 19. Split Array Largest Sum
  // let nums = [7,2,5,10,8], k = 2;
  // let res = splitArray(nums, k)
  // console.log(res)
  /////////////////////////////////////////////////////////////////
  // 20. Find Minimum in Rotated Sorted Array
  // let nums = [4, 5, 6, 7, 0, 1, 2]; // 1
  // [3,4,5,1,2] // 0, [11,13,15,17] // 11
  // let res = findMin(nums);
  // console.log(res);
  ///////////////////////////////////////////////////////////////
  // 21. Find the Duplicate Number
  // let nums = [1, 3, 4, 2, 2];
  //nums = [3,1,3,4,2] //3 , nums = [3,3,3,3,3] // 3
  // let res = findDuplicate(nums);
  // console.log(res);
  ////////////////////////////////////////////////////////////////
  //22. Task Scheduler
  // let tasks = ["A","A","A","B","B","B"], n = 2 //o/p: 8
  // Input: tasks = ["A","C","A","B","D","B"], n = 1
  // Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
  // Input: tasks = ["A","A","A", "B","B","B"], n = 3
  // Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
  //let res = leastInterval(tasks, n);
  //console.log(res);
  ////////////////////////////////////////////////////////////////
  //23. Jump Game
  //nums = [3,2,1,0,4]
  // let nums = [2, 3, 1, 1, 4];
  // let res = canJump(nums);
  // console.log(nums);
  ////////////////////////////////////////////////////////////////
  //24. Jump Game 2
  /*
  Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2
  */
  // let nums = [2, 3, 1, 1, 4];
  // let res = jump(res);
  // console.log(res);
  ////////////////////////////////////////////////////////////////////
  //25. Remove K Digits
  // let num = "1432219",
  //   k = 3;
  // //Input: num = "10200", k = 1
  // //Output: "200"
  // //Input: num = "10", k = 2
  // //Output: "0"
  // let res = removeKdigits(num, k);
  // console.log(res);
  /////////////////////////////////////////////////////////////////////////
  //26.Sliding Window Maximum
  // let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  //   k = 3;
  // let res = maxSlidingWindow(nums, k);
  // console.log(res);
  //////////////////////////////////////////////////////////////////////////
  //27. Combination Sum
  let candidates = [2, 3, 6, 7],
    target = 7;
  // Output: [[2,2,3],[7]]
  //candidates = [2,3,5], target = 8
  // Output: [[2,2,2,2],[2,3,3],[3,5]]
  let res = combinationSum(candidates, target);
};
