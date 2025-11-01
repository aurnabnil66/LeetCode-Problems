let containsNearbyDuplicate = function (nums, k) {
  let map = new Map();

  for (i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let ans = Math.abs(map.get(nums[i]) - i); // map.get(value of the key - i)

      if (ans <= k) {
        return true;
      }
    }

    map.set(nums[i], i); // {key, value} - array item as key and index as value
  }

  return false;
};

let nums = [1, 2, 3, 1, 2, 3];

let k = 2;

let result = containsNearbyDuplicate(nums, k);

console.log(result);

// Why Map or HashMap?
// We are using map here to check duplicate actually
// because map doesn't allow duplicate keys and overrites the value under same key
// also using map reduces the time complexity

// ========================= Time Complexity =========================

// Where n is the length of the input array nums

// We iterate through the array once: O(n)

// All operations inside the loop (Map.has(), Map.get(), Map.set(), Math.abs(), comparison) are O(1) on average

// In the worst case, we process all n elements

// Best case: O(1) if we find a duplicate early

// Average case: O(n)

// ========================= Space Complexity =========================

// In the worst case, the Map stores all n elements when there are no duplicates

// Best case space: O(min(n,k)) if we consider that we could optimize by only storing the last k elements
