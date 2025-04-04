// Since the given array is rotated at an unknown index, we can't directly apply normal binary search.
// Instead, we modify it to check which part of the array is sorted and adjust the search accordingly.
// We need to appluy modified binary search here
// A modified binary search is a variation of the standard binary search that is adapted to handle
// special cases—like rotated sorted arrays with duplicates in this problem.
// Also we cannot sort the array and remove duplicates because we may loose the target element or the index

let search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // target is found at the mid
    if (nums[mid] === target) {
      return true;
    }

    // If we have duplicates at both ends, skip them
    if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      left++;
      right--;
    }

    // check if the left half is sorted
    else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // if target is in the left half
        right = mid - 1;
      } else {
        // else target is in the right half
        left = mid + 1;
      }
    }

    // otherwise the right side is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        // if target is in the right half
        left = mid + 1;
      } else {
        // else target is in the left half
        right = mid - 1;
      }
    }
  }

  return false;
};

let nums = [2, 5, 6, 0, 0, 1, 2];

let target = 1;

let result = search(nums, target);

console.log(result);
