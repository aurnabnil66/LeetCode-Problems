let maximumTripletValue = function (nums) {
  let n = nums.length;

  if (n < 3) {
    return 0;
  }

  let res = 0;
  let maxI = 0;
  let maxDiff = 0;

  for (let i = 0; i < n; i++) {
    res = Math.max(res, maxDiff * nums[i]);
    maxI = Math.max(maxI, nums[i]); // Finding the max element in the array
    maxDiff = Math.max(maxDiff, maxI - nums[i]);
  }

  return res;
};

let nums = [12, 6, 1, 2, 7];

let result = maximumTripletValue(nums);

console.log(result);

// Time Complexity: O(n)

// Space Complexity: O(1)
