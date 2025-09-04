let threeSumClosest = function (nums, target) {
  let sortedNums = nums.sort((a, b) => a - b);

  if (sortedNums.length < 3) {
    return 0;
  }

  let closestSum = sortedNums[0] + sortedNums[1] + sortedNums[2];

  for (let i = 0; i < sortedNums.length - 2; i++) {
    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      let currentSum = sortedNums[i] + sortedNums[left] + sortedNums[right];

      // compare the minimum absolute difference with the target
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else if (currentSum > target) {
        right--;
      } else {
        return currentSum; // if the sum is equal to the target
      }
    }
  }

  return closestSum;
};

let nums = [-1, 2, 1, -4];

let target = 1;

let result = threeSumClosest(nums, target);

console.log(result);

// ========================= Time and Space Complexity =========================

// Time Complexity: sorting O(nlogn) + two-pointer iteration O(n^2) = O(n^2)

// Space Complexity: O(1)
