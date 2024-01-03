//generics in ts allows you to create reusable components or functions that can work eith multiple data types.
function logandreturn(value) {
    //console.log(value);
    return value;
}
var numberResult = logandreturn(42);
var stringResult = logandreturn("Hello, generics");
var booleanResult = logandreturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
//multiple type 
function add(a, b, c) {
    console.log(typeof a);
    console.log(typeof b);
}
var result1 = add(5, "komal", true);
var result2 = add("hello", 5, false);
