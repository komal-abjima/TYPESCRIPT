                                            // BOOLEAN DATATYPE
//wap make a function isEven that takes a number as a parameter and returns true is it is even number and false otherwise

const isEven = (number: number) => {

    if(number % 2 == 0){
        
        return true;

    }
    else {
        return false;
    }

}
console.log(isEven(2));

// function isEven2 (a: number){
//     return a % 2 === 0;
// }
// console.log(isEven2(4));



//wap make a function isDivisibleBy4and8 that takes a number as a parameter and returns true if the number is divisible by 4 and 8

const idDivisibleBy4and8 = (num: number) =>{

    if(num % 4 == 0 && num % 8 == 0){
        return true;
    }
    else{
        return false;
    }

}

console.log(idDivisibleBy4and8(20));



                                                    // BIGINT DATATYPE
//let maxNumber = Number.MAX_SAFE_INTEGER;  2 ^ 54 numbers greater bigInt 
//let maxNumber = (Number as any).Max_SAFE_INTEGER;
let bigNumber:bigint = 9007199254740991n
console.log(bigNumber);
let anotherBigNumber: bigint = BigInt("90071992547409925")
console.log(anotherBigNumber);
//addition
let sum2 = bigNumber + anotherBigNumber;
console.log(sum2);

//subtraction
let sub = bigNumber - anotherBigNumber;
console.log(sub);

//multiplication
let mul = bigNumber * anotherBigNumber;
console.log(mul);

//division
let div = bigNumber / anotherBigNumber;
console.log(div);

