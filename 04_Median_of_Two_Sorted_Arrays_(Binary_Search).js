let findMedianSortedArrays = function (nums1, nums2) {
  // Declare variables for binary search
  let low = 0;
  let high = 0;

  // Swap arrays if needed
  // Need the smaller array in the binary search for optimization
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]; // swapping
    high = nums1.length;
  } else {
    high = nums1.length;
  }

  while (low < high) {}
};

let nums1 = [1, 2];

let nums2 = [3, 4];

let result = findMedianSortedArrays(nums1, nums2);

console.log(result);
