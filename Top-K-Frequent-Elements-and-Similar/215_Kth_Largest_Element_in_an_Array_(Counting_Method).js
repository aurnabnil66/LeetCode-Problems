let findKthLargest = function (nums, k) {
  // create a frequency map to store the count of each number in the array
  let frequencyMap = new Map();

  // count the frequency of each number in the array
  for (let x of nums) {
    frequencyMap.set(x, (frequencyMap.get(x) || 0) + 1);
  }

  let count = 0; // counter to keep track of the number of elements processed
  let largestValue = Math.max(...nums); // find the largest value in the array
  let smallestValue = Math.min(...nums); // find the smallest value in the array

  // iterate from the largest value to the smallest value
  // and check if the current value exists in the frequency map
  // if it does, add its frequency to the count
  // if the count reaches or exceeds k,
  // return the current value as the kth largest element
  for (let i = largestValue; i >= smallestValue; i--) {
    if (frequencyMap.has(i)) {
      count += frequencyMap.get(i);

      if (count >= k) {
        return i;
      }
    }
  }
};

let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];

let k = 4;

let result = findKthLargest(nums, k);

console.log(result);

// ------------------ Time Complexity ------------------
// O(n + R)
// n is the length of nums (building the Map, plus the max and min scans),
// and R = max − min is the range the loop walks.
// The constraints cap R at 20,000, so in practice this is linear.

// ------------------ Space Complexity ------------------
// O(d), where d is the number of distinct values in nums. That's at most n.
