let topKFrequent = function (nums, k) {
  let map = new Map();

  for (let x of nums) {
    if (map.has(x)) {
      map.set(x, map.get(x) + 1);
    } else {
      map.set(x, 1);
    }
  }

  let result = Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((num) => num[0]);

  return result;
};

let nums = [3, 0, 1, 0];
let k = 1;

let result = topKFrequent(nums, k);

console.log(result);

// Time Complexity: O(n log n) due to sorting

// Space Complexity: O(n) for the map and result array
