console.log(
  "https://leetcode.com/problems/longest-repeating-character-replacement/"
);
console.log("Longest Repeating Character Replacement");

var characterReplacement = function (s, k) {
  const len = s.length;

  // Initialize left and right pointers for the sliding window
  let l = 0;
  let r = 0;

  // maxLen keeps track of the longest valid substring found
  let maxLen = 0;

  // maxF stores the count of the most frequent character in the current window
  let maxF = 0;

  // Array to count occurrences of each uppercase letter (A-Z)
  let countArr = new Array(26).fill(0);

  while (r < len) {
    // Convert current character to an index (0-25)
    const currentChar = s.charCodeAt(r) - "A".charCodeAt();

    // Increment frequency count for this character
    countArr[currentChar]++;

    // Update max frequency character count seen so far in the window
    maxF = Math.max(maxF, countArr[currentChar]);

    // If more than 'k' characters need to be replaced to make all chars in window the same,
    // shrink the window from the left
    if (r - l + 1 - maxF > k) {
      // Decrease the count of the character going out of the window
      countArr[s.charCodeAt(l) - "A".charCodeAt()]--;
      // Move left pointer forward
      l++;
    }

    // If window is valid (maxF + k >= window length), update maxLen
    if (r - l + 1 - maxF <= k) {
      maxLen = Math.max(maxLen, r - l + 1);
      r++; // Expand window by moving right pointer
    }
  }

  // Return the length of the longest valid substring
  return maxLen;
};

/*
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.



Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
*/
