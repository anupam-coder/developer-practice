console.log("Non-decreasing Array");
console.log(
  "https://leetcode.com/problems/non-decreasing-array/description/?envType=problem-list-v2&envId=eebazzg2"
);

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var checkPossibility = function (nums) {
//     let len = nums.length, count = 0;
//     for (let i = 1; i < len; i++) {
//         if (nums[i] < nums[i-1]) {
//              if((i-2)>=0 && nums[i] < nums[i-2]){
//                 nums[i] = nums[i-1];
//              }
//              count++;
//             if (count > 1) {
//                 return false;
//             }
//         }
//     }
//     return true;
// };

export function checkPossibility(N) {
  for (let i = 1, err = 0; i < N.length; i++)
    if (N[i] < N[i - 1]) {
      err++;
      if (
        err > 1 ||
        (i > 1 && i < N.length - 1 && N[i - 2] > N[i] && N[i + 1] < N[i - 1])
      ) {
        return false;
      }
    }
  return true;
}

// var checkPossibility = function (N) {
//     // Start a loop from the second element (index 1) of the array
//     // 'err' keeps track of the number of violations (places where the array is decreasing)
//     for (let i = 1, err = 0; i < N.length; i++) {

//         // If we find a violation (i.e., N[i] < N[i-1])
//         if (N[i] < N[i - 1]) {

//             // Increment the count of violations
//             err++;

//             // If more than 1 violation is found, return false (we can only modify one element)
//             if (err > 1 ||
//                 // If the violation is too complex to fix by modifying one element, return false
//                 (i > 1 && i < N.length - 1 &&
//                  N[i - 2] > N[i] && // The element two places before N[i] is greater than N[i]
//                  N[i + 1] < N[i - 1]) // The element after N[i] is smaller than N[i - 1]
//             ) {
//                 return false;  // More than one violation or too complex to fix with one modification
//             }
//         }
//     }

//     // If we find 0 or 1 violation that can be fixed, return true
//     return true;
// };
