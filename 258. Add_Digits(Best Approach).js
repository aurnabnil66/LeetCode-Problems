let addDigits = function (num) {
  if (num === 0 || num < 0) {
    return 0;
  }

  let result = num % 9 === 0 ? 9 : num % 9;

  return result;
};

let num = 38;

let result = addDigits(num);

console.log(result);

// Time Complexity: O(1)

// Space Complexity: O(1)
