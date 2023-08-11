const fibonacci = function(num) {
//Compute the fibonacci sequence to a given value.
//A fibonacci number is the sum of the preceding tweo numbers.
if (num < 0) return 'OOPS';
if (num === 0) return 0;

let a = 0;
let b = 1;
let arr = [1];
for (let i = 1; i < num; i++){
    fibNum = a + b;
    a = b;
    b = fibNum;
    arr.push(fibNum)
}
//Return the final sequence value, which in effect is the fibonacci number for the given value.
return arr[arr.length -1];
};

// Do not edit below this line
module.exports = fibonacci;
