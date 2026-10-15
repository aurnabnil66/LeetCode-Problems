let dailyTemperatures = function (temperatures) {
  // Fill the result array with 0s
  // The length will be same as temperatures array
  let result = new Array(temperatures.length).fill(0);

  let stack = []; // Needed for keep track of indices

  // Go through the temperatures array
  for (let i = 0; i < temperatures.length; i++) {
    // If the stack is not empty and existing element is less than current element
    // i.e current day is warmer than the previous day
    // Then pop the index from stack
    // calculate -> Current index - popped index
    // Place the calculated value in the result array
    // It should be placed in the result array's "poppedIndex" th index
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      let poppedIndex = stack.pop();

      result[poppedIndex] = i - poppedIndex;
    }

    stack.push(i); // Push current index into stack if it is empty
  }

  return result;
};

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

let result = dailyTemperatures(temperatures);

console.log(result);
