// Q1: Sort an array of Strings based on ASCENDING Order of the length of element.
// Input: [“ABCDE”, “ABCD”, “Z”, “A”, “AB”, “AA”, “ABC”]
// Output: [“A”, “Z”, “AA”, “AB”, “ABC”, “ABCD”, “ABCDE”]

function sortLen1(input) {
  input.sort();
  return input.sort(comp);
}

function comp(a, b) {
  return a.length - b.length;
}

function sortLen(input) {
  // Custom Bubble Sort: sort by length, then alphabetically
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = 0; j < input.length - i - 1; j++) {
      // Compare lengths first
      if (
        input[j].length > input[j + 1].length ||
        (input[j].length === input[j + 1].length && input[j] > input[j + 1])
      ) {
        // Swap if out of order
        let temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  return input;
}

let input = ["ABCDE", "ABCD", "Z", "A", "AB", "AA", "ABC"];
console.log(sortLen(input));
