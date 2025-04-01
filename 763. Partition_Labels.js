let partitionLabels = function (s) {
  let lastIndexNumber = {}; // Object to store the last index value of each character

  for (let i = 0; i < s.length; i++) {
    lastIndexNumber[s[i]] = i;
  }

  let partitionArray = []; // Array to store string partitions
  let partitionItemLength = []; // Array to store lengths of string partitions
  let start = 0; // Start index of current partition
  let end = 0; // End index of current partition

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, lastIndexNumber[s[i]]); // Expand partition to include all occurrences of the current character

    if (i === end) {
      partitionArray.push(s.substring(start, end + 1));
      start = end + 1;
    }
  }

  partitionArray.map((item) => partitionItemLength.push(item.length)); // using map to access each item

  return partitionItemLength;
};

let string = "ababcbacadefegdehijhklij";

let result = partitionLabels(string);

console.log(result);
