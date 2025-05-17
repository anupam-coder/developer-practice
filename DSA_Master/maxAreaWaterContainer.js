console.log("Container With Most Water");
console.log(
  "https://leetcode.com/problems/container-with-most-water/description/?envType=problem-list-v2&envId=erks9qb7"
);

/**
 * @param {number[]} height
 * @return {number}
 */
export function maxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const width = right - left;
    const area = Math.min(height[left], height[right]) * width;
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
