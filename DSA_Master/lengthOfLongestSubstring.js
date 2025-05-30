console.log("Longest Substring Without Repeating Characters");
console.log(
  "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=problem-list-v2&envId=erks9qb7"
);
/**
 * @param {string} s
 * @return {number}
 */
//two pointer solution
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  let hashSet = new Set();
  let left = 0;
  let right = 0;
  let len = 0;
  while (right < s.length) {
    if (hashSet.has(s[right])) {
      hashSet.delete(s[left]);
      left++;
    } else {
      hashSet.add(s[right]);
      right++;
    }
    len = Math.max(len, hashSet.size);
  }

  return len;
};

// Solution to also get the string as well
// let max = 0, currentStr = "";
// for (let i = 0; i < s.length; i++) {
//     if (currentStr.indexOf(s[i]) !== -1) {
//         currentStr = currentStr.substr(currentStr.indexOf(s[i]) + 1);
//     }
//     currentStr += s[i];
//     console.log(currentStr)
//     max = Math.max(max, currentStr.length);
// }
// return max;
