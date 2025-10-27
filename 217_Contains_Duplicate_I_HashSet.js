let containsDuplicate = function (nums) {
  // create a set to store unique values
  let set = new Set();

  // loop through the array
  for (let x of nums) {
    // if the set already contains the number - duplicate found
    if (set.has(x)) return true;

    // otherwise, add the number to the set
    set.add(x);
  }

  return false;
};

const nums = [18, 22, 2, 14, 22];

let result = containsDuplicate(nums);

console.log(result);

// ========================= Time Complexity =========================

// Time complexity: O(n) — Each lookup and insertion in a Set is on average O(1).

// ========================= Space Complexity =========================

// Space complexity: O(n) — In the worst case, all elements are unique and stored in the set.
