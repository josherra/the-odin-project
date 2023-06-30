const reverseString = function (string) {
  let split = string.split("");
  let reversed = [];

  for (let i = split.length - 1; i >= 0; i--) {
    reversed.push(split[i]);
  }

  return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
