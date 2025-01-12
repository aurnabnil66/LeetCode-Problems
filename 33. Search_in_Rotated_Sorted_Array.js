let search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // after dividing the array into two parts, one half needs to be sorted

    // check if the left half is sorted
    if (nums[left] <= nums[mid]) {
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
        right = nums.length - 1;
      }
    }
  }

  return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2];

let target = 1;

let result = search(nums, target);

if (result === -1) {
  console.log("Target not found ==> -1");
} else {
  console.log(`Target found at index ${result}`);
}
