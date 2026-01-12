let multiply = function (num1, num2) {
  // if num1 or num2 is 0 - return 0
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  // create an array to store the result - filled with zeros
  let result = new Array(num1.length + num2.length).fill(0);

  // loop through the digits of num1 and num2
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      // multiply the current digit of num1 and num2 - convert to number
      let product = Number(num1[i]) * Number(num2[j]);

      // add the product to the current digit of the result
      let sum = product + result[i + j + 1];

      // store the remainder
      result[i + j + 1] = sum % 10;

      // store the carry
      result[i + j] += Math.floor(sum / 10);
    }
  }

  // remove leading zeros from the result
  while (result[0] === 0) {
    result.shift();
  }

  return result.join(""); // return the result as a string
};

let num1 = "123";

let num2 = "456";

let result = multiply(num1, num2);

console.log(result);

/*
| Aspect             | Complexity   | Explanation                                              |
|--------------------|--------------|----------------------------------------------------------|
| Time Complexity    | O(n × m)     | Each digit of num1 is multiplied with each digit of num2 |
| Space Complexity   | O(n + m)     | Result array stores at most n + m digits                 |
|
| Where:
| n = length of string num1
| m = length of string num2
*/
