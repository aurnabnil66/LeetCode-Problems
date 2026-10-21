let myPow = function (x, n) {
  let ans = 1;

  if (n < 0) {
    n = -n;
    for (i = 1; i <= n; i++) {
      ans = 1 / ((1 / ans) * x);
    }
  } else {
    for (i = 1; i <= n; i++) {
      ans = ans * x;
    }
  }

  return ans;
};

let x = 2.0,
  n = 9;

let result = myPow(x, n);

console.log(result);
