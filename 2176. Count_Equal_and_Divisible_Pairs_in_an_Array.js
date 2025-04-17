let countPairs = function (nums, k) {
  let count = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        count++;
      }
    }
  }

  return count;
};

let nums = [3, 1, 2, 2, 2, 1, 3];

let k = 2;

let result = countPairs(nums, k);

console.log(result);
