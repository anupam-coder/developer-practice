console.log("Two Sum");
console.log(
  "https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=erks9qb7"
);

export function twoSum(nums, target) {
  /* 
  //Brute force approa
  const len = nums.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum = 0;
    for (let j = i + 1; j < len; j++) {
      sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
    */

  const len = nums.length;
  let hashMap = new Map();
  for (let i = 0; i < len; i++) {
    if (hashMap.has(nums[i])) {
      return [hashMap.get(nums[i]), i];
    } else {
      let temp = target - nums[i];
      hashMap.set(temp, i);
    }
  }
}
