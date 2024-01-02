var greet = function (name, id) {
    console.log("Hello ".concat(name, " id is ").concat(id));
};
greet("komal", 1);
var greetWithReturn = function (name, id) {
    return "Welcome, ".concat(name, " and your id is ").concat(id);
};
var mygreet = greetWithReturn("komal", 2);
console.log(mygreet);
//function to check string is palindrome or not returns true if it is palindrome or false otherwise
var isPalindrome = function (palin) {
    var myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
};
console.log(isPalindrome("madam"));
//function calculateAverage() takes an array of number as a parameter and returns the average of those number
var calculateAverage = function (arr) {
    var avg = arr.reduce(function (n1, n2) { return n1 + n2; }, 0) / arr.length;
    return avg;
};
console.log("Average:");
console.log(calculateAverage([2, 2]));
//function findMaxValue() takes an array of number and print max value 
var findMaxValue = function (arr1) {
    var max = Math.max.apply(Math, arr1); //math.max.apply(null, arr1)
    return max;
};
console.log("MAximum number in an array:");
console.log(findMaxValue([2, 10, 5, 78]));
