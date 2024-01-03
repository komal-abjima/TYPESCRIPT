//union
var inputValue = function (value) { return void {}; };
inputValue("Hello");
inputValue(55);
inputValue(true);
//q1= create a function that can accept different types of arguments and perform different actions based on the type of the input.
//suppose we want to create a function that doubles the value if the input is a number, or converts the input to uppercase if it is a string
//use union type
var double_Upper = function (elem) {
    if (typeof elem === "number")
        return elem * 2;
    if (typeof elem === "string")
        return elem.toUpperCase();
    else {
        throw console.error('Invalid input data..');
    }
};
console.log(double_Upper(2));
console.log(double_Upper("komal"));
// q-2
var format = function (value) {
    if (typeof value === "number") {
        return "$".concat(value);
    }
    else if (typeof value === 'boolean') {
        return value = true ? 'yes' : 'no';
    }
    else if (typeof value === 'string') {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
};
console.log(format(true));
console.log(format(false));
console.log(format("ram"));
console.log(format(12));
