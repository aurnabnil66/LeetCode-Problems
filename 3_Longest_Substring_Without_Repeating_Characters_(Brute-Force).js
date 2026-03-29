let lengthOfLongestSubstring = function (s) {
  let lengthOfString = 0; // store the length of the longest substring

  for (let i = 0; i < s.length; i++) {
    let set = new Set(); // using set to avoid duplicate characters
    for (let j = i; j < s.length; j++) {
      if (set.has(s[j])) {
        break; // if the character is already in the set, break the loop
        // breaking the loop will go to the parent loop and start with the next character
      } else {
        set.add(s[j]);
        lengthOfString = Math.max(lengthOfString, j - i + 1);
      }
    }
  }

  return lengthOfString;
};

let s = "pwwkew";

let result = lengthOfLongestSubstring(s);

console.log(result);
