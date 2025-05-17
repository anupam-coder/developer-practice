var compress = function (chars) {
  let n = chars.length; // Store the original length of the array
  let idx = 0; // Index for writing the compressed characters

  for (let i = 0; i < n; i++) {
    let ch = chars[i]; // Current character to compress
    let count = 0; // Counter for how many times current character repeats

    // Count how many times the current character repeats consecutively
    while (i < n && chars[i] === ch) {
      count++;
      i++;
    }

    // Always store the character once
    chars[idx++] = ch;

    // If the character appears more than once, store the count as individual digits
    if (count > 1) {
      for (let digit of count.toString()) {
        chars[idx++] = digit; // Store each digit of the count
      }
    }

    i--; // Adjust 'i' since the for loop will increment it again
  }

  // Resize the array to the new length (compressed size)
  chars.length = idx;

  return idx; // Return the new length of the compressed array
};

let arr = ["a", "a", "c", "c", "c", "b", "b"];
compress(arr); // Output: 6, arr becomes ['a','2','c','3','b','2']

function compressString(s) {
  if (s.length === 0) return "";

  let result = "";
  let count = 1;

  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      result += s[i - 1];
      if (count > 1) result += count;
      count = 1;
    }
  }

  return result;
}
