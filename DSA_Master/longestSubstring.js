console.log(" Longest Substring with At Least K Repeating Characters");
console.log(
  "https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/description/"
);

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
export function longestSubstring(s, k) {
  const len = s.length;
  let hashMap = new Map();
  for (let i = 0; i < len; i++) {
    if (hashMap.has(s[i])) {
      hashMap.set(s[i], hashMap.get(s[i]) + 1);
    } else {
      hashMap.set(s[i], 1);
    }
  }
  for (let i = 0; i < len; i++) {
    if (hashMap.get(s[i]) < k) {
      //recursion method
      return Math.max(
        longestSubstring(s.slice(0, i), k),
        longestSubstring(s.slice(i + 1), k)
      );
    }
  }
  return s.length;
}
