let twoSum = function (nums, target) {
  // store the numbers with their original indices
  let indexedNums = nums.map((value, index) => [value, index]);

  // sort the array based on the first element -> value
  indexedNums.sort((a, b) => a[0] - b[0]);

  let sum = 0; // to store the sum
  let left = 0; // left pointer points to the first element
  let right = nums.length - 1; // right pointer points to the last element

  // left needs to be less than right
  while (left < right) {
    sum = indexedNums[left][0] + indexedNums[right][0]; // calculate the sum

    // if the sum is equal to the target return the indices
    if (sum === target) {
      return [indexedNums[left][1], indexedNums[right][1]];
    }

    // if the sum is less than the target move the left pointer forward
    else if (sum < target) {
      left++;
    }

    // otherwise move the right pointer backward
    else {
      right--;
    }
  }
};

let nums = [3, 2, 4];

let target = 6;

let result = twoSum(nums, target);

console.log(result);

// ******************* Analyzing Time Complexity of this Solution *******************

// 1. nums.map(...) → O(n)

// 2. indexedNums.sort(...) → O(n log n)

// 3. Two-pointer while loop → O(n)

// Total Time Complexity: O(n) + O(nlogn) + O(n) = O(nlogn)

// ******************* Analyzing Space Complexity of this Solution *******************

// indexedNums stores a pair [value, index] for each element → O(n)

// ******************* Sorted and Unsorted Arrays *******************

// For sorted arrays :
// Time: O(n) (just the two-pointer scan).
// Space: O(1) (no need for extra storage, unless you need original indices).

// For unsorted arrays :
// Time: O(n log n) because we need to sort the array.
// Space: O(n) because we need to store original indices.
