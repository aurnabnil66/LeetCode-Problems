let merge = function (nums1, m, nums2, n) {
  // 3 pointers approach
  // Initialize pointers for nums1, nums2, and the end of merged array
  let p1 = m - 1; // Pointer for the end of the initialized part of nums1
  let p2 = n - 1; // Pointer for the end of nums2
  let p3 = m + n - 1; // Pointer for the end of nums1

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p3] = nums1[p1];
      p1--;
    } else {
      nums1[p3] = nums2[p2];
      p2--;
    }
    p3--;
  }

  // copy remaining elements from nums2, if any
  while (p2 >= 0) {
    nums1[p3] = nums2[p2];
    p2--;
    p3--;
  }

  return nums1;
};

let nums1 = [4, 5, 6, 0, 0, 0],
  m = 3;

let nums2 = [1, 2, 3],
  n = 3;

let result = merge(nums1, m, nums2, n);

console.log(result);

// ================== Time Complexity ==================

// O(m + n)

// Each pointer (p1, p2, p3) only moves leftward.

// Every element in nums1 (up to m) and nums2 (up to n) is processed at most once.

// The two while loops together cover all m + n elements.

// The total work is linear

// ================== Space Complexity ==================

// O(1)

// We are modifying nums1 in place.

// Only a fixed number of variables (p1, p2, p3) are used.

// No additional arrays or data structures are created.

// Note: This is auxiliary space. The input array nums1 already has size m + n,
// which does not count as extra space.
