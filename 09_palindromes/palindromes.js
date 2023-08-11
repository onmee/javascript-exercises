const palindromes = function (text) {

// Split string into an array
let str =  text.split('');
const punctuation =[' ', ',', '.', '!'];

// Remove from str array items included in the punctuation array.
let filteredStr = str.filter(item => !punctuation.includes(item));

// Change all characters in array to lowercase.
let lowerCaseStr = filteredStr.map(item => item.toLowerCase());

// If original and reversed array match, then we have a palindrome!
let check = lowerCaseStr.join('') === lowerCaseStr.reverse().join('');
return check;
};

// Do not edit below this line
module.exports = palindromes;
