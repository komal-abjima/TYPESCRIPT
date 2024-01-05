class Persons {
    private _age: number | undefined;
    constructor(
        public name: string,
        protected hobbies: string[]


    ) { }

    //setter method
    public set age(age: number) {
        //for age validation
        if (age > 110 || age < 0) {
            throw new Error('age is invalid')

        }
        this._age = age;

    }

    //getter method

    public get age(): number{

        if(this._age === undefined){
            throw new Error('Age is not defined');

        }
        return this._age;

    }

    introduceParent(): string {
        return `Hi I am ${this.name} and I am ${this._age} years old. I love ${this.hobbies.join(", ")}`;
    }
}

const Person1: Persons = new Persons("komal", ["cooking, dancing"]);

Person1.age = 25;
console.log(Person1.introduceParent());
console.log(Person1.age);