let plusOne = function (digits) {
  // iterate the array from the end
  for (let i = digits.length - 1; i >= 0; i--) {
    // add 1 to the current digit
    let x = digits[i] + 1;

    // if the current digit is less than 10, add it to the array and return the array
    // otherwise, set the current digit to 0
    if (x < 10) {
      digits[i] = x;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  // after the loop, add the last carry value - which is 1 here
  digits.unshift(1);

  return digits; // finally return the array
};

let digits = [9, 9, 9];

let result = plusOne(digits);

console.log(result);

/*
------------------------------------------------------------
Time Complexity & Space Complexity
------------------------------------------------------------
n = digits.length

| Step | Code Section                         | Time Cost | Explanation                                  |
|------|--------------------------------------|-----------|----------------------------------------------|
| 1    | for loop (right → left)              | O(n)      | Worst case: all digits are 9                  |
| 2    | digits[i] + 1                        | O(1)      | Constant-time arithmetic                     |
| 3    | if (x < 10)                          | O(1)      | Single comparison                             |
| 4    | digits[i] = x                        | O(1)      | In-place assignment                          |
| 5    | return digits (early exit)           | O(1)      | Best case: no carry                          |
| 6    | digits[i] = 0                        | O(1)      | Reset digit when carry occurs                |
| 7    | digits.unshift(1)                    | O(n)      | Shifts all elements to the right             |
| 8    | return digits                        | O(1)      | Final return                                 |

Overall Time Complexity:
- Best Case: O(1)
- Worst Case: O(n)
- Average Case: O(n)

Space Complexity:
- O(1) (in-place modification)
------------------------------------------------------------
*/
