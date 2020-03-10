module.exports = function reverse(n) {
    if (n < 0) {
        n = -n;
    }
    let reversedNum = n
        .toString()
        .split("")
        .reverse()
        .join("");
    return reversedNum;
};
