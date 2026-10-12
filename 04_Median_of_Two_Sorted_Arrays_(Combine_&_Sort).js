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

// ======================================================================
// ------------------------- Time Complexity ----------------------------
// ======================================================================
//
// Let m = nums1.length, n = nums2.length, and k = m + n (size of nums3)
//
// | Operation        | Lines    | Cost        | Why                          |
// |------------------|----------|-------------|------------------------------|
// | Init variables   | 2-3      | O(1)        | Constant-time setup          |
// | Copy nums1       | 6-8      | O(m)        | m pushes, amortized O(1)     |
// | Copy nums2       | 11-13    | O(n)        | n pushes, amortized O(1)     |
// | Sort nums3       | 16       | O(k log k)  | TimSort on k elements        |
// | Odd/even check   | 22       | O(1)        | One modulo                   |
// | Compute median   | 23-28    | O(1)        | Index access + arithmetic    |
// | Return           | 31       | O(1)        | Returns one value            |
//
// In total = O(1) + O(m) + O(n) + O(k log k) + O(1)
//          = O(m + n) + O((m + n) log(m + n))
//
// Since (m + n) log(m + n) grows faster than (m + n), the sort dominates:
//   Final Time Complexity: O((m + n) log(m + n))
//
// Note: the problem asks for O(log(m + n)). This approach does not meet that
// requirement because it ignores that both inputs are ALREADY sorted.
// A two-pointer merge would bring it down to O(m + n), and binary search on
// the partition brings it to O(log(min(m, n))).

// ======================================================================
// ------------------------- Space Complexity ---------------------------
// ======================================================================
//
// | Item             | Lines    | Space      | Why                          |
// |------------------|----------|------------|------------------------------|
// | median           | 3        | O(1)       | Single number                |
// | Loop counter i   | 6, 11    | O(1)       | Single number                |
// | nums3            | 2, 7, 12 | O(m + n)   | Copy of both arrays          |
// | Sort buffer      | 16       | O(m + n)   | TimSort temp space (worst)   |
// | Median calc      | 22-28    | O(1)       | Reads by index only          |
//
// The input arrays nums1 and nums2 are not counted (they are given, not created).
//
// In total: O(1) + O(1) + O(m + n) + O(m + n) + O(1)
//         = O(m + n)
//
//   Final Space Complexity: O(m + n)
//
// Note: nums3 alone already costs O(m + n), so even with an in-place sort
// the space would still be O(m + n). The binary search solution avoids
// building nums3 entirely and uses only O(1) extra space.
