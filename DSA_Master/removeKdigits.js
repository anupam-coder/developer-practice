console.log("Remove K Digits");
console.log(
  "https://leetcode.com/problems/remove-k-digits/description/?envType=problem-list-v2&envId=greedy"
);

/**
 * @param {string} num - The given number as a string
 * @param {number} k - The number of digits to remove
 * @return {string} - The smallest possible number after removing k digits
 */
export function removeKdigits(num, k) {
  // If the number length is equal to k, removing all digits results in "0"
  if (num.length === k) return "0";

  // The length of the input number string
  const len = num.length;

  // The result array to store the digits of the final number
  const res = [];

  // Loop through each digit of the number string
  for (let i = 0; i < len; i++) {
    // While there are still digits to remove (k > 0) and the last digit in the result is greater than the current digit
    // this ensures that we are forming the smallest number by removing larger digits
    while (k > 0 && res.length > 0 && res[res.length - 1] > num[i]) {
      k--; // Decrease k since we removed one digit
      res.pop(); // Remove the last digit from the result array
    }

    // Skip leading zeros, except when the result is empty (in that case, '0' is allowed)
    if (res.length === 0 && num[i] === "0") continue;

    // Push the current digit to the result array
    res.push(num[i]);
  }

  // If there are still digits to remove after processing the whole string
  // we remove them from the end of the result array
  while (k > 0 && res.length > 0) {
    k--; // Decrease k as we remove digits
    res.pop(); // Remove the last digit from the result array
  }

  // If the result is empty after removal, return "0", otherwise join the array into a string
  return res.length === 0 ? "0" : res.join("");
}
