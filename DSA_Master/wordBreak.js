console.log("Word Break");
console.log(
  "https://leetcode.com/problems/word-break/description/?envType=problem-list-v2&envId=erks9qb7"
);

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
export function wordBreak(s, wordDict) {
  if (wordDict === null || wordDict.length === 0) return false;
  const dictSet = new Set(wordDict);
  let q = [0];
  let visited = new Set();
  while (q.length) {
    let start = q.shift();
    for (let end = start + 1; end <= s.length; end++) {
      if (!visited.has(start)) {
        for (let end = start + 1; end <= s.length; end++) {
          if (dictSet.has(s.slice(start, end))) {
            if (end === s.length) {
              return true;
            }
            q.push(end);
          }
        }
        visited.add(start);
      }
    }
  }
  return false;
}
