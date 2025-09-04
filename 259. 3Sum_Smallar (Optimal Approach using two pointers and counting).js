let threeSumSmaller = function (nums, target) {
  let sortedNums = nums.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < sortedNums.length - 2; i++) {
    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      let sum = sortedNums[i] + sortedNums[left] + sortedNums[right];

      if (sum < target) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }

  return count;
};

let nums = [-2, 0, 1, 3];

let target = 2;

let result = threeSumSmaller(nums, target);

console.log(result);

// ========================= Time and Space Complexity =========================

// Time Complexity: sorting O(nlogn) + two-pointer iteration O(n^2) = O(n^2)

// Space Complexity: O(1)
