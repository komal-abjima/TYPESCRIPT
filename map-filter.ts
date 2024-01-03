//map method
const numbers: number[] = [1,2,3,4,5];

//map - this method creates a new array by applying a provided function to each element of the original array.it transforms each element and returns a new array with the transformed values.

//doubling each number
const doubleData: number[] = numbers.map((curval) => curval * 2);
console.log(doubleData);

//covert number to string
const numberToString: string[] = numbers.map((val) =>val.toString());
console.log(numberToString);

//filter method
//filtering even number
const evenNumber: number[] = numbers.filter((val1) => val1 % 2 === 0);
console.log(evenNumber);

//filtering no greater then 3
const numGreaterThan3: number[] = numbers.filter((val2) => val2 > 3);
console.log(numGreaterThan3);

//ques-1 given an array of strings representing names, create a new array that contains the uppercase version of each name.
const newArr: string[] = ["komal", "shivam", "prince"];
const UpArr: string[] = newArr.map((values) => values.toUpperCase());
console.log(UpArr);

//ques-2 given an array of numbers , create a new array that contains the sqaure of each number.
const newArr2: number[] = [1,2,3,4,5]
const UpArr2: number[] = newArr2.map((value3) => value3 ** 2);
console.log(UpArr2);

//filter ques-1 given an arary pf strings, create a new array that contains only the string with a length greater than 15.
const newArr3: string[] = ["Hello", "I am the best because i love myself", "Komla Sharma", "Bye"];
const UpArr3: string[] = newArr3.filter((value4) => value4.length > 15);
console.log(UpArr3); 

//ques-2 filter out the names that start with the letter of "A"
const names2: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
const startNameWithA: string[] = names2.filter((elm) => elm.indexOf("A") === 0);
//const startNameWithA: string[] = names2.filter((value5: string)=>value5.startsWith('A'));
console.log(startNameWithA);
