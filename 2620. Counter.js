/**
 * @param {number} n
 * @return {Function} counter
 */
let createCounter = function (n) {
  return () => n++;
};

let result = createCounter(10);

console.log(result());
console.log(result());
console.log(result());

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
