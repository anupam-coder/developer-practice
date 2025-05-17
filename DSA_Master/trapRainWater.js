console.log("Trapping Rain Water");
console.log("https://leetcode.com/problems/trapping-rain-water/description/");

/**
 * @param {number[]} height
 * @return {number}
 */
export function trap(height) {
  /*
    const len = height.length;
    const maxLeft = [height[0]], maxRight=[height[len-1]];
    let res = 0;
    let left = height[0], right = height[len-1]
    for(let i=1;i<len;i++){
        left = Math.max(height[i],left);
        maxLeft.push(left)
    }

    for(let i=len-2;i>=0;i--){
        right = Math.max(height[i],right);
        maxRight.push(right)
    }
    //console.log(maxLeft,maxRight)
    for(let i=1;i<len-1;i++){
        let ht = Math.min(maxLeft[i],maxRight[len-i-1]) - height[i];
        //console.log(ht, "ht")
        res += ht;
    }

    return res;
    */
  const len = height.length;
  let left = 0,
    right = len - 1;
  let maxLeft = 0,
    maxRight = 0;
  let waterArea = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        console.log(maxLeft, height[left], "1");
        waterArea += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        console.log(maxRight, height[right]);
        waterArea += maxRight - height[right];
      }
      right--;
    }
  }

  return waterArea;
}
