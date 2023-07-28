const reverseString = function(string) {
    let reversedString = '';
    let stringIndex = string.length - 1;

    for (let i =  stringIndex; i >= 0; i--) {
        reversedString += string[i]
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
