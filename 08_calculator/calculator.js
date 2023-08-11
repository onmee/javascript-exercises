const add = function(a, b) {
	let sum = a + b;
  return sum;
};

const subtract = function(a, b) {
	let sum = a - b;
  return sum;
};

const sum = function(arr) {
	let totalSum = arr.reduce((sum, currentItem) => sum + currentItem, 0);
  return totalSum;
};

const multiply = function(arr) {
  let totalSum = arr.reduce((sum, currentItem) => sum * currentItem, 1);
  return totalSum;
};

const power = function(a, b) {
	let totalSum = a ** b;
  return totalSum;
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  } else {
    let totalSum = 1;
    for (let i = num; i > 1; i--) {
      totalSum *= i; 
    }
    return totalSum;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
