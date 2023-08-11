const findTheOldest = function(obj) {

    // If object does not include DOB, add current year using date function

    // Calculate age uisng birth and death, or present date and add the value into the object
    let arr = obj;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].yearOfDeath === undefined) {
            const currentDate = new Date();
            arr[i].age = currentDate.getFullYear() - arr[i].yearOfBirth;
        } else {
            arr[i].age = arr[i].yearOfDeath - arr[i].yearOfBirth;
        }
    }
    // Compare ages and find the object with oldest person
    let oldest = arr.reduce((oldest, person) => oldest.age > person.age ? oldest : person);
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
