"use strict";
//the commented code is the all code and i am commenting this code by using shorthand property
class Persons {
    name;
    age;
    hobbies;
    // name: string;
    // age: number;
    // hobbies: string[];
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        // this.name = name;
        // this.age = age;
        // this.hobbies = hobbies;
    }
    introduce() {
        return `Hi i am ${this.name} and i am ${this.age} years old and I love ${this.hobbies.join(", ")}.`;
    }
}
class Students extends Persons {
    grade;
    //grade: number;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
        //this.grade = grade;
    }
    introduce() {
        //return `${super.introduce()}. i am in grade ${this.grade}`;
        return `${this.hobbies}`;
        //return `Hi i am ${this.name} and i am ${this.age} years old, I am in grade${this.grade} and I love ${this.hobbies.join(", ")}.`
    }
}
const person1 = new Persons("komal", 25, ["cooking", "dancing"]);
const person2 = new Persons("shivam", 22, ["coding", "sports"]);
const student = new Students("student", 22, ["coding", "sports"], 10);
console.log(person1.introduce());
console.log(person2);
console.log(student.introduce());
