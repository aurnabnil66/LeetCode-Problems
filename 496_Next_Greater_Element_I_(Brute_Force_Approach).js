let nextGreaterElement = function (nums1, nums2) {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    // flag to check if greater element is found
    let found = false;

    // find the index of nums1[i] in nums2
    let idx = nums2.indexOf(nums1[i]);

    // traverse to the right in nums2 after that selected element
    for (let j = idx + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        result.push(nums2[j]);
        found = true;
        break;
      }
    }

    if (!found) {
      result.push(-1);
    }
  }

  return result;
};

let nums1 = [4, 1, 2];

let nums2 = [1, 3, 4, 2];

let result = nextGreaterElement(nums1, nums2);

console.log(result);

// ================== Time and Space Complexity ==================
/*
| Approach      | Time Complexity | Space Complexity |
|---------------|-----------------|------------------|
| Brute Force   | O(m * n)        | O(1)             |
| Monotonic Stack | O(n + m)     | O(n)             |

Where:
- n = length of nums2
- m = length of nums1
*/
