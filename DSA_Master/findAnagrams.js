console.log("Find All Anagrams in a String");
console.log(
  "https://leetcode.com/problems/find-all-anagrams-in-a-string/description/"
);

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
export function findAnagrams(s, p) {
  if (p.length > s.length) return [];
  let res = [];
  let freqS = new Array(26).fill(0);
  let freqP = new Array(26).fill(0);
  let start = 0,
    end = p.length;

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
