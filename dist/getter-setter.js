"use strict";
class Persons {
    name;
    hobbies;
    _age;
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    //setter method
    set age(age) {
        //for age validation
        if (age > 110 || age < 0) {
            throw new Error('age is invalid');
        }
        this._age = age;
    }
    //getter method
    get age() {
        if (this._age === undefined) {
            throw new Error('Age is not defined');
        }
        return this._age;
    }
    introduceParent() {
        return `Hi I am ${this.name} and I am ${this._age} years old. I love ${this.hobbies.join(", ")}`;
    }
}
const Person1 = new Persons("komal", ["cooking, dancing"]);
Person1.age = 25;
console.log(Person1.introduceParent());
console.log(Person1.age);
