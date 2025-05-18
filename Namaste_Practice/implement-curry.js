/*
Create a curry function that accepts a function fn and returns a curried version of it. The curried function should accept arguments one at a time, and once all arguments are received (based on the original function's arity), the original function should be executed.
Example Inputs & Outputs
function sum(a, b, c) {
return a + b + c;
}
const curriedSum =
curry (sum);
curriedSum(1)(2)(3); // → 6 
// curriedSum(1, 2)(3); // → 6 
// curriedSum(1)(2, 3); // → 6 
// curriedSum(1, 2, 3); // → 6
Constraints & Edge Cases
• The input fn can have any number of parameters.
• The curried function must handle partial application (passing fewer args in one call).
• It should support chaining until all arguments are passed.
• If fn takes 0 arguments, it should return the result of calling fn().

*/
//1st way
function curry(fn) {
  // Your implementation
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...moreArgs) {
        return curried(...args, ...moreArgs);
      };
    }
  };
}

//2nd way
// function curry(fn) {
//     return function curried(...args) {
//         if (args.length >= fn.length) {
//             return fn.apply(this, args);
//         } else {
//             return function (...moreArgs) {
//                 return curried.apply(this,[...args,...moreArgs]);
//             };
//         }
//     };
// }

const curriedSum = curry(sum);
curriedSum(1)(2)(3); // → 6
// curriedSum(1, 2)(3); // → 6
// curriedSum(1)(2, 3); // → 6
// curriedSum(1, 2, 3); // → 6

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];

function groupBy(arr, key) {
  // Your implementation
  const obj = {};
  if (!arr.length) return obj;
  arr?.forEach((el, id) => {
    if (el.hasOwnProperty(key)) {
      obj[key] = [el];
    }
  });
  return obj;
}
