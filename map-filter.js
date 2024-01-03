//map method
var numbers = [1, 2, 3, 4, 5];
//map - this method creates a new array by applying a provided function to each element of the original array.it transforms each element and returns a new array with the transformed values.
//doubling each number
var doubleData = numbers.map(function (curval) { return curval * 2; });
console.log(doubleData);
//covert number to string
var numberToString = numbers.map(function (val) { return val.toString(); });
console.log(numberToString);
//filter method
//filtering even number
var evenNumber = numbers.filter(function (val1) { return val1 % 2 === 0; });
console.log(evenNumber);
//filtering no greater then 3
var numGreaterThan3 = numbers.filter(function (val2) { return val2 > 3; });
console.log(numGreaterThan3);
//ques-1 given an array of strings representing names, create a new array that contains the uppercase version of each name.
var newArr = ["komal", "shivam", "prince"];
var UpArr = newArr.map(function (values) { return values.toUpperCase(); });
console.log(UpArr);
//ques-2 given an array of numbers , create a new array that contains the sqaure of each number.
var newArr2 = [1, 2, 3, 4, 5];
var UpArr2 = newArr2.map(function (value3) { return Math.pow(value3, 2); });
console.log(UpArr2);
//filter ques-1 given an arary pf strings, create a new array that contains only the string with a length greater than 15.
var newArr3 = ["Hello", "I am the best because i love myself", "Komla Sharma", "Bye"];
var UpArr3 = newArr3.filter(function (value4) { return value4.length > 15; });
console.log(UpArr3);
//ques-2 filter out the names that start with the letter of "A"
var names2 = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
var startNameWithA = names2.filter(function (elm) { return elm.indexOf("A") === 0; });
//const startNameWithA: string[] = names2.filter((value5: string)=>value5.startsWith('A'));
console.log(startNameWithA);
