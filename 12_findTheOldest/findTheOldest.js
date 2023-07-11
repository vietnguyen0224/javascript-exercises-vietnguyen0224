const findTheOldest = function(arr) {
    return arr.reduce((prev, current) => {
        if (!("yearOfDeath" in current)) current.yearOfDeath = (new Date()).getFullYear();
        if (!("yearOfDeath" in prev)) prev.yearOfDeath = (new Date()).getFullYear();
        return current.yearOfDeath - current.yearOfBirth > prev.yearOfDeath - prev.yearOfBirth ? current : prev;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
