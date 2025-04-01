let putMarbles = function (weights, k) {
  let n = weights.length;
  let pairwiseSum = [];

  for (let i = 0; i < n - 1; i++) {
    pairwiseSum.push(weights[i] + weights[i + 1]);
  }

  pairwiseSum.sort((a, b) => a - b); // Sort the pairwise sums for optimization

  let maxScore = 0;
  let minScore = 0;

  for (let i = 0; i < k - 1; i++) {
    maxScore += pairwiseSum[n - 2 - i];
    minScore += pairwiseSum[i];
  }

  // Since each partitioning creates one more bag, selecting (k-1) boundaries results in exactly k bags.

  return maxScore - minScore;
};

let weights_array = [1, 3];

let number_of_bags = 2;

let result = putMarbles(weights_array, number_of_bags);

console.log(result);
