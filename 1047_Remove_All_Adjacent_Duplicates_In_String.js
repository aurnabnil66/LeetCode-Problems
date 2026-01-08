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
