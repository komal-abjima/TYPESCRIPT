"use strict";
//Temperature Convertor
class Temperature {
    _celsius = 0;
    get celsius() {
        return this._celsius;
    }
    set celsius(newCelsius) {
        this._celsius = newCelsius;
    }
    //a getter method fahrenheit that coverts celsius to fahrenheit using the formula ( C * 9/5) + 32;
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
    //a setter method 
    set fahrenheit(newFah) {
        this._celsius = ((newFah - 32) * 5) / 9;
    }
}
const temp = new Temperature();
//for converting celsius into fahrenheit
temp.celsius = 25;
console.log(temp.fahrenheit);
//for converting fahrenheit into celsius
temp.fahrenheit = 77;
console.log(temp.celsius);
