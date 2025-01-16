let threeSum = function (nums) {
  let result = [];

  let sortedNums = nums.sort((a, b) => a - b); // sorting the array

  if (sortedNums.length < 3) {
    return result;
  }

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] > 0) {
      break;
      // if current element is greater than 0 then break the loop
      // cannot be any triplets that sum to zero when the first element is positive
    }

    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
      // skipping the first element
      // if the current element is equal to the previous element then skip it
      // to avoid duplicate triplets
    }

    // two-pointer approach ==> a low pointer and a high pointer
    let low = i + 1; // starting from the second element
    let high = sortedNums.length - 1;

    while (low < high) {
      let sum = sortedNums[i] + sortedNums[low] + sortedNums[high];

      if (sum === 0) {
        result.push([sortedNums[i], sortedNums[low], sortedNums[high]]);
      }

      if (sum > 0) {
        high--;
      } else if (sum < 0) {
        low++;
      } else {
        let lastLowOccurace = sortedNums[low];
        let lastHighOccurace = sortedNums[high];
        while (low < high && sortedNums[low] === lastLowOccurace) {
          low++;
        }
        while (low < high && sortedNums[high] === lastHighOccurace) {
          high--;
        }
      }
    }
  }

  return result;
};

let nums = [-1, 0, 1, 2, -1, -4];

let result = threeSum(nums);

console.log(result);

// Time Complexity:
// Sorting: O(nlogn)
// Two-pointer iteration: O(n^2)
// Overall: O(n^2)

// Space Complexity: O(1)
