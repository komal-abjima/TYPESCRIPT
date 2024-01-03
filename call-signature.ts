/*the function call signature refers to the declaration or definition of a function, which includes the function name, parameters and 
return type.It defines the structure and type information of a function without including the function's implementation or body.*/

type Student = {
    name: string;
    age: number;
    gender?: string;
    greet: (country: string) => string //method call signature
    //(country: string):string; //pure call signature
}

const student1:Student = {
    name: "shivam",
    age:20,
    greet: ((country): string => `Welcome my name is ${student1.name}, and my age is ${student1.age} and I am from ${country}`)
}

const student2:Student = {
    name: "prince",
    age:20,
    greet: ((country): string => `Welcome my name is ${student2.name}, and my age is ${student2.age} and I am from ${country}`)
}
const introduction = (student1: Student) => {
   const {name, age} = student1;
   return `Welcome my name is ${name} and my age is ${age}`;
}
console.log(introduction(student1));
console.log(student1.greet('India'));
console.log(student2.greet('Nepal'));   //console.log(student2('India')); pure call signature
