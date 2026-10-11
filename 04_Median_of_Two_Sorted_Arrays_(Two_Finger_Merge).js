let findMedianSortedArrays = function (nums1, nums2) {
  let nums3 = []; // new third array
  let median = 0; // median value

  let i = 0; // track on nums1
  let j = 0; // track on nums2

  // compare items and merge the arrays by sorting them initially
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      nums3.push(nums1[i]);
      i++;
    } else {
      nums3.push(nums2[j]);
      j++;
    }
  }

  // check whether any item is left in the 1st array
  while (i < nums1.length) {
    nums3.push(nums1[i]);
    i++;
  }

  // check whether any item is left in the 2nd array
  while (j < nums2.length) {
    nums3.push(nums2[j]);
    j++;
  }

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

let nums1 = [1];

let nums2 = [2, 3];

let result = findMedianSortedArrays(nums1, nums2);

console.log(result);
