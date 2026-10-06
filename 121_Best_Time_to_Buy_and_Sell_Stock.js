let maxProfit = function (prices) {
  let maxProfit = 0; // Initialize the maximum profit to 0
  let bestDayToBuy = 0; // Initialize the best day to buy as the first day

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[bestDayToBuy]) {
      bestDayToBuy = i; // Update the best day to buy if a lower price is found
    } else {
      let profit = prices[i] - prices[bestDayToBuy]; // Calculate the profit if selling on day i
      maxProfit = Math.max(maxProfit, profit); // Update the maximum profit if the current profit is greater
    }
  }

  return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];

let result = maxProfit(prices);

console.log(result);

// ================== Time Complexity ==================
// Iterating the array of prices takes O(n) time
// We have one comparison and one subtraction for each element in the array, which is O(1) time
// Therefore, it is O(n x 1) = O(n) time complexity - dropping the constant factor

// ================== Space Complexity ==================
// We have variables maxProfit and bestDayToBuy
// We do not have any growing array or data structure that scales with input size
// Therefore, it is O(1) space complexity
