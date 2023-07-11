const palindromes = function (str) {
    let nonAlphaNumeric = /[^A-Za-z0-9]/g;
    let arr = str.toLowerCase().replace(nonAlphaNumeric,'').split('');
    let oldArr = [...arr];
    return arr.reverse().join() === oldArr.join();
};

// Do not edit below this line
module.exports = palindromes;
