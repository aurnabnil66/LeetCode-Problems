let findMedianSortedArrays = function (nums1, nums2) {
  let nums3 = []; // new third array
  let median = 0; // median value

  // push all the items of 1st array in the 3rd array
  for (let i = 0; i < nums1.length; i++) {
    nums3.push(nums1[i]);
  }

  // push all the items of 2nd array in the 3rd array
  for (let i = 0; i < nums2.length; i++) {
    nums3.push(nums2[i]);
  }

  // sort the 3rd array in ascending order
  nums3.sort((a, b) => a - b);

  // Calculate the median of the new merged array
  // Check the length - if it is odd or even
  // If the length is odd - median will be middle one
  // If the length is even - median will be the average of the two middle values
  if (nums3.length % 2 != 0) {
    median = nums3[Math.floor(nums3.length / 2)];
  } else {
    median =
      (nums3[Math.floor(nums3.length / 2)] +
        nums3[Math.floor(nums3.length / 2) - 1]) /
      2;
  }

  return median;
};

let nums1 = [1, 2];

let nums2 = [3, 4];

let result = findMedianSortedArrays(nums1, nums2);

console.log(result);
