// BOOLEAN DATATYPE
//wap make a function isEven that takes a number as a parameter and returns true is it is even number and false otherwise
var isEven = function (number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isEven(2));
// function isEven2 (a: number){
//     return a % 2 === 0;
// }
// console.log(isEven2(4));
//wap make a function isDivisibleBy4and8 that takes a number as a parameter and returns true if the number is divisible by 4 and 8
var idDivisibleBy4and8 = function (num) {
    if (num % 4 == 0 && num % 8 == 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(idDivisibleBy4and8(20));
// BIGINT DATATYPE
//let maxNumber = Number.MAX_SAFE_INTEGER;
var bigNumber = 9007199254740991n;
console.log(bigNumber);
var anotherBigNumber = BigInt("90071992547409925");
console.log(anotherBigNumber);
//addition
var sum2 = bigNumber + anotherBigNumber;
console.log(sum2);
//subtraction
var sub = bigNumber - anotherBigNumber;
console.log(sub);
//multiplication
var mul = bigNumber * anotherBigNumber;
console.log(mul);
//division
var div = bigNumber / anotherBigNumber;
console.log(div);
