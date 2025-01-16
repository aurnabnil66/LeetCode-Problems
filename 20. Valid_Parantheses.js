let isValid = function (s) {
  let stack = [];

  if (s.length % 2 !== 0) return false; // if length is odd return false

  if (s[0] === ")" || s[0] === "}" || s[0] === "]") return false; // check starting

  if (
    s[s.length - 1] === "(" ||
    s[s.length - 1] === "{" ||
    s[s.length - 1] === "["
  )
    return false; // check ending

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(")");
    } else if (s[i] === "{") {
      stack.push("}");
    } else if (s[i] === "[") {
      stack.push("]");
    } else if (stack.pop() !== s[i]) {
      return false;
    }
  }

  return !stack.length;
  // it will return true if the stack is empty => means all the opening brackets are closed
};

let inputString = "({[]})";

let result = isValid(inputString);

console.log(result);

// Main goal is to check whether the stack is empty or not

// If the stack is empty, it means that all the opening brackets are closed
// i.e the string is valid then

// If the stack is not empty, it means that some opening brackets are not closed
// i.e the string is invalid then
