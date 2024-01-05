"use strict";
//static properties and methods of a class
class MathOperation {
    static PI = Math.PI; //bydefault pi value is saved in ts it is static property
    //static methods
    static Add(num1, num2) {
        return num1 + num2;
    }
    static Sub(num1, num2) {
        return num1 - num2;
    }
    static Mul(num1, num2) {
        return num1 * num2;
    }
    static Div(num1, num2) {
        return num1 / num2;
    }
    static Mod(num1, num2) {
        return num1 % num2;
    }
}
console.log(MathOperation.PI);
console.log(MathOperation.Add(2, 2));
console.log(MathOperation.Sub(2, 2));
console.log(MathOperation.Mul(2, 2));
console.log(MathOperation.Div(2, 2));
console.log(MathOperation.Mod(2, 2));
