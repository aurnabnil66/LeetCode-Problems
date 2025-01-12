let searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === -1 && target === 0) {
      return i + 1;
    }

    if (nums[i] === target) {
      return i;
    }

    if (nums[i] > target) {
      return i;
    }

    if (i > 0 && nums[i - 1] < target && target < nums[i]) {
      return i;
    }
  }

  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
};

const nums = [-1, 3, 5, 6];

console.log("Original List:", nums);

const target = 0;

const result = searchInsert(nums, target);

console.log(result);
