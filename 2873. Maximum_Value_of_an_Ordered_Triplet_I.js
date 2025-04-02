let maximumTripletValue = function (nums) {
  let subtractValue = 0;
  let tripletValue = 0;
  let validValues = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        subtractValue = nums[i] - nums[j];
        tripletValue = subtractValue * nums[k];
        validValues.push(tripletValue);
      }
    }
  }
  validValues = validValues.filter((item) => item >= 0); // filtering negative values

  return validValues.length > 0 ? Math.max(...validValues) : 0;
};

let nums = [12, 6, 1, 2, 7];

let result = maximumTripletValue(nums);

console.log(result);
