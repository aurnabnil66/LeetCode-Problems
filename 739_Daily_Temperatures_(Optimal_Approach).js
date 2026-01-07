let dailyTemperatures = function (temperatures) {
  let stack = [];

  // store the difference between the current temperature and the next greater temperature
  let nextGreater = [];

  for (let i = 0; i < temperatures.length; i++) {
    // Get the temperature value of the index stored at the top of the stack
    // and compare it with the current temperature
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      let index = stack.pop(); // pop the index

      nextGreater[index] = i - index; // store the difference
    }
    stack.push(i); // push the index
  }

  // fill the remaining elements with 0
  while (stack.length) {
    let index = stack.pop();
    nextGreater[index] = 0;
  }

  return nextGreater;
};

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

let result = dailyTemperatures(temperatures);

console.log(result);

// ================== Time and Space Complexity ==================
/*
| Part of Algorithm                          | Time Complexity | Space Complexity |
|-------------------------------------------|-----------------|------------------|
| Iterating through temperatures array      | O(n)            | O(1)             |
| Stack push/pop operations                 | O(n)            | O(n)             |
| Updating nextGreater during pops          | O(n)            | O(1)             |
| Filling remaining stack with 0            | O(n)            | O(1)             |
| Result array (nextGreater) storage        | —               | O(n)             |
|-------------------------------------------|-----------------|------------------|
| Overall                                   | O(n)            | O(n)             |

Where:
- n = length of temperatures
*/
