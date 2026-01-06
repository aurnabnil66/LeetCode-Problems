let nextGreaterElement = function (nums1, nums2) {
  // Monotonic stack approach
  let stack = []; // stack for LIFO

  let nextGreater = new Map(); // to store the next greater element

  // Build the map using a monotonic decreasing stack
  for (let x of nums2) {
    // while the stack is not empty and the stack's top element is smaller than x
    while (stack.length && stack[stack.length - 1] < x) {
      // pop the top element from the stack and set it in the map
      nextGreater.set(stack.pop(), x);
    }

    // push the current element into the stack
    stack.push(x);
  }

  // numbers left in the stack have no greater element
  while (stack.length) {
    nextGreater.set(stack.pop(), -1);
  }

  // return the next greater element for each element in nums1
  return nums1.map((x) => nextGreater.get(x));
};

let nums1 = [4, 1, 2];

let nums2 = [1, 3, 4, 2];

let result = nextGreaterElement(nums1, nums2);

console.log(result);

// ================== Time and Space Complexity ==================
/*
| Part of Algorithm                        | Time Complexity | Space Complexity |
|------------------------------------------|-----------------|------------------|
| Iterating through nums2 (stack building) | O(n)            | O(n)             |
| Stack push/pop operations                | O(n)            | O(n)             |
| Filling remaining stack with -1          | O(n)            | O(1)             |
| Mapping nums1 to nextGreater values      | O(m)            | O(m)             |
| Map storage (nextGreater)                | —               | O(n)             |
|------------------------------------------|-----------------|------------------|
| Overall                                  | O(n + m)        | O(n)             |

Where:
- n = length of nums2
- m = length of nums1
*/
