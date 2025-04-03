let addDigits = function (num) {
  if (num === 0 || num < 0) {
    return 0;
  }

  let sum = 0;
  let rem = 0;
  let temp = num;

  while (temp !== 0) {
    rem = temp % 10;
    sum += rem;
    temp = Math.floor(temp / 10);
  }

  if (sum < 10) {
    return sum;
  } else {
    return addDigits(sum);
  }
};

let num = 38;

let result = addDigits(num);

console.log(result);
