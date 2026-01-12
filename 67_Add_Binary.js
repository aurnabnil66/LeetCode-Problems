let addBinary = function (a, b) {
  let result = []; // store the result

  let i = a.length - 1; // point to the last index of a

  let j = b.length - 1; // point to the last index of b

  let carry = 0; // carry of addition process

  // while there are digits to be added
  while (i >= 0 || j >= 0 || carry) {
    // calculate the sum
    // convert string to number
    let sum = (i >= 0 ? Number(a[i]) : 0) + (j >= 0 ? Number(b[j]) : 0) + carry;

    carry = Math.floor(sum / 2); // calculate the carry - division result

    result.push(sum % 2); // store the remainder

    // decrement the pointers to the next digit in the left
    i--;
    j--;
  }

  return result.reverse().join(""); // reverse the result and join it into a string
};

let a = "11";

let b = "1";

let result = addBinary(a, b);

console.log(result);
