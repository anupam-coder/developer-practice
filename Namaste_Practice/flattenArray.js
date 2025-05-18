/*
Approach
1. Use recursion to check each element in the array.
2. If an element is an array, recursively call flattenArray on it.
3. If an element is not an array, add it to the result.
4. Use Array.prototype.concat() or reduce() to merge nested elements into a single array.
*/

function flattenArray(arr, res = []) {
  // Your implementation
  for (const val of arr) {
    if (Array.isArray(val)) {
      flattenArray(val, res);
    } else {
      res.push(val);
    }
  }
  return res;
}

// Recursive way
function flattenArrayRecursive(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val)
        ? acc.concat(flattenArrayRecursive(val))
        : acc.concat(val),
    []
  );
}

// Iterative way
function flattenArrayIterative(arr) {
  let stack = [...arr];
  let result = [];

  while (stack.length) {
    let next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.unshift(next);
    }
  }

  return result;
}

//For the purpose of user debugging.
flattenArray([1, [2, [3, 4], 5], 6]);
