const greet = (name: string, id: number) => {
    console.log(`Hello ${name} id is ${id}`);
}
greet("komal", 1);

const greetWithReturn = (name: string, id: number) =>{
    return `Welcome, ${name} and your id is ${id}`
}
const mygreet = greetWithReturn("komal", 2);
console.log(mygreet);

//function to check string is palindrome or not returns true if it is palindrome or false otherwise
const isPalindrome = (palin:string):boolean =>{
    let myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
}
console.log(isPalindrome("madam"));

//function calculateAverage() takes an array of number as a parameter and returns the average of those number
var calculateAverage = (arr: number[]): number =>{
   let avg = arr.reduce((n1, n2) => n1 + n2, 0) / arr.length;
   return avg;
}
console.log("Average:")
console.log(calculateAverage([2,2]));

//function findMaxValue() takes an array of number and print max value 
var findMaxValue = (arr1: number[]): number =>{
    let max = Math.max(...arr1);  //math.max.apply(null, arr1)
    return max;
}
console.log("Maximum number in an array:")
console.log(findMaxValue([2,10,5,78]));