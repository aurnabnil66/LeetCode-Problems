let containsNearbyDuplicate = function (nums, k) {
  let map = new Map();

  for (i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      ans = Math.abs(map.get(nums[i]) - i);
      if (ans <= k) {
        return true;
      }
    }
    map.set(nums[i], i);
    console.log(map);
  }
  return false;
};

let nums = [1, 2, 3, 1, 2, 3];

let k = 2;

let result = containsNearbyDuplicate(nums, k);

console.log(result);
