const removeFromArray = function(arr, ...theArgs) {
    return arr.filter(arg => !theArgs.includes(arg));
};

// Do not edit below this line
module.exports = removeFromArray;
