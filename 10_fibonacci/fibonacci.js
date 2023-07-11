const fibonacci = function(index) {
    if (index < 0) return "OOPS";
    let result = [1,1];
    for (let i = 2; i < index; i++) {
        result.push(result[i-1]+result[i-2])
    }
    return result[index-1]
};

// Do not edit below this line
module.exports = fibonacci;
