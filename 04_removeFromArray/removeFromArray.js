const removeFromArray = function() {
    let array = arguments[0];
    for (i = 1; i < arguments.length; i++) {
        if(array.includes(arguments[i])) {
            array = array.filter(element => element !== arguments[i]);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
