let nextGreaterElements = function (nums) {
  const n = nums.length;

  let result = new Array(n).fill(-1);

  let stack = [];

  // loop will run till (2n-1) bcz it is a circular array
  for (let i = 0; i < 2 * n - 1; i++) {
    let idx = i % n; // index of the circular array

    let x = nums[idx]; // get values from the circular array

    // if the stack is not empty and the top of the stack is smaller than x
    while (stack.length && nums[stack[stack.length - 1]] < x) {
      let value = stack.pop();

      result[value] = x;
    }

    stack.push(idx); // push the index
  }

  return result;
};

let nums = [1, 2, 1];

let result = nextGreaterElements(nums);

console.log(result);
