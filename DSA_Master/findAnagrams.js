console.log("Find All Anagrams in a String");
console.log(
  "https://leetcode.com/problems/find-all-anagrams-in-a-string/description/"
);

/**
 * Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
export function findAnagrams(s, p) {
  if (p.length > s.length) return [];
  let res = [];
  let freqS = new Array(26).fill(0);
  let freqP = new Array(26).fill(0);
  let start = 0;
  let end = p.length;

  for (let i = 0; i < p.length; i++) {
    freqS[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    freqP[p.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  if (freqS.join("") === freqP.join("")) {
    res.push(start);
  }

  while (end < s.length) {
    freqS[s.charCodeAt(start) - "a".charCodeAt(0)]--;
    freqS[s.charCodeAt(end) - "a".charCodeAt(0)]++;

    if (freqS.join("") === freqP.join("")) {
      res.push(start + 1);
    }

    start++;
    end++;
  }

  return res;
}
