console.log("Longest Palindromic Substring");
console.log(
  "https://leetcode.com/problems/longest-palindromic-substring/description/?envType=problem-list-v2&envId=erks9qb7"
);

/**
 * @param {string} s
 * @return {string}
 */
export function longestPalindrome(s) {
  let len = s.length,
    l = 0,
    r = 0,
    start = 0,
    end = 0,
    ans = 1,
    str = "",
    maxSize = 1;
  let size = 0;
  for (let i = 0; i < len; i++) {
    let lenEven = getLength(s, i, i);
    let lenOdd = getLength(s, i, i + 1);
    ans = Math.max(ans, lenOdd);
    ans = Math.max(ans, lenEven);
  }

  function getLength(s, l, r) {
    while (l >= 0 && r < len && s[l] === s[r]) {
      size = r - l + 1;
      if (maxSize < size) {
        maxSize = size;
        start = l;
        end = r;
      }
      l--;
      r++;
    }
    return maxSize;
  }
  // console.log(start, end);

  for (let i = start; i <= end; i++) {
    str += s[i];
  }
  return str;
}
