"use strict";
//using square brackets
const arr = [1, 2, 3, 4];
//using the array constructor
const arr1 = new Array(1, 2, 3, 4);
//using the array.of method
const names = Array.of("komal", "sharma");
console.log(names);
const value2 = { name: "Komal", age: 25 };
console.log(typeof value2);
//array
const fruits = ["apple", "banana", "orange"];
//push operation
const updatedfruits = fruits.push("kiwi");
//pop 
const remove = fruits.pop();
console.log(updatedfruits);
console.log(remove);
console.log(fruits);
// iterate using for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//for...of loop
for (const fruit of fruits) {
    console.log(fruit);
}
//forEach loop
fruits.forEach((values) => console.log(values));
//map method
const numbers = [1, 2, 3, 4, 5];
//map - this method creates a new array by applying a provided function to each element of the original array.it transforms each element and returns a new array with the transformed values.
//doubling each number
const doubleData = numbers.map((curval) => curval * 2);
console.log(doubleData);
//covert number to string
const numberToString = numbers.map((val) => val.toString());
console.log(numberToString);
//filter method
//filtering even number
const evenNumber = numbers.filter((val1) => val1 % 2 === 0);
console.log(evenNumber);
//filtering no greater then 3
const numGreaterThan3 = numbers.filter((val2) => val2 > 3);
console.log(numGreaterThan3);
