let containsDuplicate = function (nums) {
  let map = new Map();
  let sortedArray = nums.sort(); // [2, 14, 18, 22, 22]

  for (let i = 0; i < sortedArray.length; i++) {
    if (map.has(sortedArray[i])) return true;
    map.set(sortedArray[i], i); // {value, key}
  }
  return false;
};

const nums = [18, 22, 2, 14, 22];

let result = containsDuplicate(nums);

console.log(result);

// ========================= Time Complexity =========================

// sorting --> O(nlogn)

// Loop + Hash Map Ops --> O(n)

// Total --> O(nlogn)

// ========================= Space Complexity =========================

// Hash Map --> O(n)
