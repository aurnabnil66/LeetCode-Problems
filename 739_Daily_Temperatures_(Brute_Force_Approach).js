// Brute Force Approach
// Not ideal for larger inputs
// Cannot be solved efficiently with brute force
let dailyTemperatures = function (temperatures) {
  let n = temperatures.length;

  let result = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (temperatures[j] > temperatures[i]) {
        result[i] = j - i;
        break;
      }
    }
  }

  return result;
};

let temperatures = [55, 38, 53, 81, 61, 93, 97, 32, 43, 78];

let result = dailyTemperatures(temperatures);

console.log(result);

// ================== Time and Space Complexity ==================
/*
| Part of Algorithm                          | Time Complexity | Space Complexity |
|-------------------------------------------|-----------------|------------------|
| Iterating through temperatures array      | O(n^2)          | O(1)             |
| Iterating through result array            | O(n)            | O(n)             |
|-------------------------------------------|-----------------|------------------|
| Overall                                   | O(n^2)          | O(n)             |
*/
