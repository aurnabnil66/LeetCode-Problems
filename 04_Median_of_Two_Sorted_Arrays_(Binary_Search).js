let findMedianSortedArrays = function (nums1, nums2) {
  // Swap arrays if needed
  // Need the smaller array in the binary search for optimization
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]; // swapping
  }

  let m = nums1.length;
  let n = nums2.length;
  let low = 0;
  let high = m;
  let half = Math.floor((m + n + 1) / 2);
  let median = 0;

  // Do the split in the arrays
  while (low <= high) {
    let cut1 = Math.floor((low + high) / 2);
    let cut2 = half - cut1;
    let nums1Left = 0;
    let nums1Right = 0;
    let nums2Left = 0;
    let nums2Right = 0;

    if (cut1 == 0) {
      nums1Left = Number.NEGATIVE_INFINITY;
    } else {
      nums1Left = nums1[cut1 - 1];
    }

    if (cut1 == m) {
      nums1Right = Number.POSITIVE_INFINITY;
    } else {
      nums1Right = nums1[cut1];
    }

    if (cut2 == 0) {
      nums2Left = Number.NEGATIVE_INFINITY;
    } else {
      nums2Left = nums2[cut2 - 1];
    }

    if (cut2 == n) {
      nums2Right = Number.POSITIVE_INFINITY;
    } else {
      nums2Right = nums2[cut2];
    }

    // Calculate median if the cut/split is valid
    if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
      if ((m + n) % 2 != 0) {
        median = Math.max(nums1Left, nums2Left);
      } else {
        median =
          (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) /
          2;
      }
      return median;
    }

    // If nums1 give too many, we need to move left
    else if (nums1Left > nums2Right) {
      high = cut1 - 1;
    }

    // Otherwise we need to move right
    else {
      low = cut1 + 1;
    }
  }
};

let nums1 = [1, 2, 5, 9];

let nums2 = [3, 4];

let result = findMedianSortedArrays(nums1, nums2);

console.log(result);
