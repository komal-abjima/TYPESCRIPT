class Persons1{
  

    constructor(public name: string, public age: number, protected hobbies: string[]){
      
    }
    introduceParent(): string{
        return `Hi i am ${this.name} and i am ${this.age} years old and I love ${this.hobbies.join(", ")}.`

    }
}