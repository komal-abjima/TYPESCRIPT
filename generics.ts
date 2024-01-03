//generics in ts allows you to create reusable components or functions that can work eith multiple data types.
function logandreturn<T>(value:T):T{
    //console.log(value);
    return value;
}
const numberResult:number = logandreturn(42);
const stringResult: string = logandreturn("Hello, generics");
const booleanResult: boolean = logandreturn(true);

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);

//multiple type 
function add<T,U>(a: T, b: U, c: boolean): void {
    console.log(typeof a);
    console.log(typeof b);

}
const result1: void = add<number, string>(5, "komal", true);
const result2: void = add<string, number>("hello", 5, false);

