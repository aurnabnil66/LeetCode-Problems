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

// ======================================================================
// ------------------------- Time Complexity ----------------------------
// ======================================================================
//
// Let m = nums1.length, n = nums2.length, and k = m + n (size of nums3)
//
// | Operation        | Lines    | Cost       | Why                          |
// |------------------|----------|------------|------------------------------|
// | Init variables   | 2-6      | O(1)       | Constant-time setup          |
// | Merge loop       | 9-17     | O(m + n)   | One element pushed per step  |
// | Leftover nums1   | 20-23    | O(m)       | Remaining nums1 items        |
// | Leftover nums2   | 26-29    | O(n)       | Remaining nums2 items        |
// | Odd/even check   | 35       | O(1)       | One modulo                   |
// | Compute median   | 36-41    | O(1)       | Index access + arithmetic    |
// | Return           | 44       | O(1)       | Returns one value            |
//
// The three loops together push every element exactly once, so their
// combined work is k = m + n pushes (each push() is amortized O(1)).
// The leftover loops only handle what the merge loop did not consume.
//
// In total = O(1) + O(m + n) + O(1)
//          = O(m + n)
//
//   Final Time Complexity: O(m + n)
//
// Note: this is faster than Combine & Sort's O((m + n) log(m + n)) because
// it uses the fact that both inputs are already sorted, so no sort is needed.
// It still does not meet the problem's O(log(m + n)) requirement; binary
// search on the partition brings it to O(log(min(m, n))).

// ======================================================================
// ------------------------- Space Complexity ---------------------------
// ======================================================================
//
// | Item             | Lines    | Space      | Why                          |
// |------------------|----------|------------|------------------------------|
// | median           | 3        | O(1)       | Single number                |
// | Pointers i, j    | 5-6      | O(1)       | Two numbers                  |
// | nums3            | 2, 11-27 | O(m + n)   | Copy of both arrays          |
// | Median calc      | 35-41    | O(1)       | Reads by index only          |
//
// The input arrays nums1 and nums2 are not counted (they are given, not created).
//
// In total = O(1) + O(1) + O(m + n) + O(1)
//          = O(m + n)
//
//   Final Space Complexity: O(m + n)
//
// Note: nums3 is the only real cost. Since the median only needs the middle
// one or two values, the merge could stop at index k/2 and keep just the last
// two values, which would bring the extra space down to O(1).
