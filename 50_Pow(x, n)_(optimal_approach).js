let myPow = function (x, n) {
  let ans = 1;

  let isNegative = n < 0;

  // if n is negative handle that
  // converting n into positive for calculation
  if (isNegative) {
    n = -n;
  }

  while (n > 0) {
    // while diving the exponent, find out if it is odd
    // 2⁹
    // 2 × 2⁸     9 is odd → take one 2 out, keep it aside
    // 2 × 4⁴     squared base, halved power
    // 2 × 16²    squared base, halved power
    // 2 × 256¹   squared base, halved power
    // 2 × 256
    // 512
    if (n % 2 == 1) {
      ans = ans * x;
    }

    // if n is even, square the x
    // 3¹²            base 3,     power 12
    // 9⁶             squared base, halved power
    // 81³            squared base, halved power
    // 81 × 81²       power 3 is odd → take one 81 out, keep it aside
    // 81 × 6561¹     squared base, halved power
    // 81 × 6561
    // 531441

    x = x * x;

    // after each iteration 'n' needs to be halved
    // also need to stop the loop at this point
    n = Math.floor(n / 2);
  }

  // if n is negative
  if (isNegative) {
    return 1 / ans;
  } else {
    return ans;
  }
};

let x = 2.0,
  n = 9;

let result = myPow(x, n);

console.log(result);
