console.log("K Closest Points to Origin");
console.log("https://leetcode.com/problems/k-closest-points-to-origin/");

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
export function kClosest(points, k) {
  const len = points.length;
  const res = [];
  function sortFn(x, y) {
    for (let i = 0; i < len; i++) {
      let sumX = x[0] * x[0] + x[1] * x[1];
      let sumY = y[0] * y[0] + y[1] * y[1];
      return sumX - sumY;
    }
  }
  points.sort(sortFn);
  console.log(points);
  for (let i = 0; i < k; i++) {
    res.push(points[i]);
  }

  return res;
}
