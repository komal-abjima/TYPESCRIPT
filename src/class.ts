//the commented code is the all code and i am commenting this code by using shorthand property
class Persons{
    // name: string;
    // age: number;
    // hobbies: string[];

    constructor(public name: string, public age: number, protected hobbies: string[]){
        // this.name = name;
        // this.age = age;
        // this.hobbies = hobbies;
    }
    introduce(): string{
        return `Hi i am ${this.name} and i am ${this.age} years old and I love ${this.hobbies.join(", ")}.`

    }
}

class Students extends Persons{
    //grade: number;
    constructor(name: string, age: number, hobbies: string[],  public grade: number){
        super(name, age, hobbies);
        //this.grade = grade;
    }
    introduce(): string{
        //return `${super.introduce()}. i am in grade ${this.grade}`;
        return `${this.hobbies}`
        //return `Hi i am ${this.name} and i am ${this.age} years old, I am in grade${this.grade} and I love ${this.hobbies.join(", ")}.`

    }
    
}


const person1: Persons = new Persons("komal", 25, ["cooking", "dancing"]);
const person2: Persons = new Persons("shivam", 22, ["coding", "sports"]);
const student: Students = new Students("student", 22, ["coding", "sports"], 10);

console.log(person1.introduce());
console.log(person2);
console.log(student.introduce());
