const removeFromArray = function (array, ...items) {
  console.log(array);
  console.log(items.length);
  for (let i = 0; i < items.length; i++) {
    console.log(`Index: ${i}, Value: ${items[i]}`);
  }
};

removeFromArray([1, 2, 2, 2], 2, 3, 4, 5, 3, 3);

// Do not edit below this line
module.exports = removeFromArray;
