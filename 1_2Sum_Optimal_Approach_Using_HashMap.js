let twoSum = function (nums, target) {
  const numToIndex = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numToIndex.hasOwnProperty(complement)) {
      return [numToIndex[complement], i];
    }
    numToIndex[nums[i]] = i;
  }

  return [];
};

let nums = [2, 7, 11, 15];

let target = 9;

let result = twoSum(nums, target);

console.log(result);

// Time Complexity: O(n), since we traverse the array once and hash map operations are O(1).

// Space Complexity: O(n), for storing up to n elements in the map.
