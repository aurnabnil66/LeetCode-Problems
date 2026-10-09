let mySqrt = function (x) {
  if (x == 0 || x == 1) {
    return x;
  }

  let left = 1;
  let right = x;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid == x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};

let x = 10;

let result = mySqrt(x);

console.log(result);

// --------------- Time Complexity ---------------
// The binary search algorithm runs in O(log x) time complexity since we are halving the search space in each iteration.

// --------------- Space Complexity ---------------
// The space complexity is O(1) since we are using a constant amount of space regardless of the input size.
