"use strict";
//console.log("Hello");
// let age: number = 20//
// if(age < 50)
//     age += 10
// console.log(age)
//age = 'a';   here it gives an error
let sales = 123456;
let course = "TypeScript";
let is_published = true;
//any type
let level;
//without any it gives an error
function render(document) {
    console.log(document);
}
//array 
let number = [1, 2, 3];
let numberAny = []; //any type array
numberAny[0] = 1;
numberAny[1] = '2';
number.forEach(n => n.valueOf());
//tuple
let tuple = [1, "abc"];
let mySize = 2 /* Size.Medium */;
console.log(mySize);
//function
//taxYear? nullable values
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(10000));
//objects
let employe = {
    id: 1,
    name: "komal",
    retire: (date) => {
        console.log(date);
    }
};
//# sourceMappingURL=index.js.map