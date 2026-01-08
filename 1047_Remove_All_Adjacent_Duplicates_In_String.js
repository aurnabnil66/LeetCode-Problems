let removeDuplicates = function (s) {
  let stack = []; // stack to keep track of the upcoming characters

  // iterate through the string
  for (let i = 0; i < s.length; i++) {
    // if the stack is not empty and the top of the stack is equal to the current character
    // then pop the top of the stack
    // else push the current character into the stack
    if (stack.length && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join(""); // return the stack as a string
};

let s = "abbaca";

let result = removeDuplicates(s);

console.log(result);

// ================== Time and Space Complexity ==================
/*
| Part of Algorithm                      | Time Complexity | Space Complexity |
|----------------------------------------|-----------------|------------------|
| Iterating through the string `s`       | O(n)            | O(1)             |
| Stack push/pop operations              | O(n)            | O(n)             |
| Joining stack into result string       | O(n)            | O(n)             |
|----------------------------------------|-----------------|------------------|
| Overall                                | O(n)            | O(n)             |

Where:
- n = length of the string `s`
*/
