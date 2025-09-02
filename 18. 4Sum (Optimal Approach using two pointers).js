let fourSum = function (nums, target) {
  let result = [];

  // sort the array
  let sortedNums = nums.sort((a, b) => a - b);

  // if the length of the array is less than 4 then return an empty array
  if (sortedNums.length < 4) return result;

  // Because we need 3 elements after i --> that is why we have i < sortedNums.length - 3
  for (let i = 0; i < sortedNums.length - 3; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

    // Because we need 2 elements after j --> that is why we have j < sortedNums.length - 2
    for (let j = i + 1; j < sortedNums.length - 2; j++) {
      if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) continue;

      let left = j + 1;
      let right = sortedNums.length - 1;

      while (left < right) {
        let sum =
          sortedNums[i] + sortedNums[j] + sortedNums[left] + sortedNums[right];

        if (sum === target) {
          result.push([
            sortedNums[i],
            sortedNums[j],
            sortedNums[left],
            sortedNums[right],
          ]);
        }

        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          let currentLeft = sortedNums[left];
          let currentRight = sortedNums[right];

          // move left and right pointers to avoid the duplicates
          while (left < right && sortedNums[left] === currentLeft) left++;

          while (left < right && sortedNums[right] === currentRight) right--;
        }
      }
    }
  }

  return result;
};

// let nums = [1, 0, -1, 0, -2, 2];

let nums = [0, 0, 0, 0];

let target = 0;

let result = fourSum(nums, target);

console.log(result);
