/*
Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
After typing mou, mous and mouse the system suggests ["mouse","mousepad"].
Example 2:

Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
Explanation: The only word "havana" will be always suggested while typing the search word.
*/

var suggestedProducts = function (products, searchWord) {
  // Sort the products lexicographically to facilitate binary search and efficient suggestions
  products = products.sort();

  // Initialize the result array to store suggestions for each prefix
  let ans = [];

  // Initialize two pointers: 'left' points to the start and 'right' points to the end of the products array
  let left = 0;
  let right = products.length - 1;

  // Loop through each character of the searchWord to generate suggestions for each prefix
  for (let i = 0; i < searchWord.length; i++) {
    // Get the current character of the search word
    let c = searchWord.charAt(i);

    // Initialize an array to store suggestions for the current prefix
    let res = [];

    // Move 'left' pointer to the right until we find products that start with the current prefix
    // products[left]?.charAt(i) checks that the character at 'left' matches the current prefix character 'c'
    while (products[left]?.charAt(i) < c) {
      left++; // Skip products that are lexicographically smaller than the current prefix
    }

    // Move 'right' pointer to the left until we find products that start with the current prefix
    while (products[right]?.charAt(i) > c) {
      right--; // Skip products that are lexicographically greater than the current prefix
    }

    // Collect up to 3 products (if they exist) that match the current prefix
    // We add them to the 'res' array for this prefix
    for (let j = 0; j < 3 && left + j <= right; j++) {
      res.push(products[left + j]);
    }

    // Add the result for the current prefix to the final answer array
    ans.push(res);
  }

  // Return the final array containing suggestions for each prefix of the searchWord
  return ans;
};
