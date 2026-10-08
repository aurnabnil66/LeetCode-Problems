let mySqrt = function (x) {
  if (x <= 0) {
    return 0;
  }

  for (let i = 1; i <= x; i++) {
    if (i * i === x) {
      return i;
    } else if (i * i > x) {
      return i - 1;
    }
  }
};

let x = 10;

let result = mySqrt(x);

console.log(result);

// --------------- Time Complexity ---------------
// The loop runs about √x times, so the time complexity is O(√x).

// --------------- Space Complexity ---------------
// The space complexity is O(1) since we are using a constant amount of space regardless of the input size.
