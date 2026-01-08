// process function to do the whole mechanism
let process = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    // if the current character is not "#"
    // then push it into the stack
    // else pop the top of the stack
    if (s[i] !== "#") {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  return stack.join(""); // join the stack items into a string
};

let backspaceCompare = function (s, t) {
  let newS = process(s); // s --> after implementing backspace

  let newT = process(t); // t --> after implementing backspace

  return newS === newT; // return the compared result
};

let s = "ab#c";
let t = "ad#c";

let result = backspaceCompare(s, t);

console.log(result);

// ================== Time and Space Complexity ==================
/*
| Part of Algorithm                         | Time Complexity | Space Complexity |
|------------------------------------------|-----------------|------------------|
| Processing string `s` (process function) | O(n)            | O(n)             |
| Processing string `t` (process function) | O(m)            | O(m)             |
| String comparison (newS === newT)        | O(min(n, m))    | O(1)             |
|------------------------------------------|-----------------|------------------|
| Overall                                  | O(n + m)        | O(n + m)         |

Where:
- n = length of string `s`
- m = length of string `t`
*/
