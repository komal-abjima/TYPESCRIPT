//static properties and methods of a class
class MathOperation{
    public static PI: number = Math.PI;    //bydefault pi value is saved in ts it is static property
    //static methods
    public static Add(num1:number, num2:number):number{
        return num1 + num2;
    }
    public static Sub(num1:number, num2: number):number{
        return num1 - num2;
    }
    public static Mul(num1:number, num2:number):number{
        return num1 * num2;
    }
    public static Div(num1: number, num2:number):number{
        return num1 / num2;
    }
    public static Mod(num1:number, num2:number):number{

        return num1 % num2;

    }
}

console.log(MathOperation.PI);
console.log(MathOperation.Add(2,2));
console.log(MathOperation.Sub(2,2));
console.log(MathOperation.Mul(2,2));
console.log(MathOperation.Div(2,2));
console.log(MathOperation.Mod(2,2));

