//default and optional parameter
const greet3 = (name:string, id:number = 1, age?:number ) =>{
    if(age){
        return `Welcom ${name} your id is ${id} and age is ${age}`;
    }
    else{
        return `Welcome ${name} your id is ${id} `;
    }
}

const emp1 = greet3("komal");
console.log(emp1);
const emp2 = greet3("shivam",1, 24);
console.log(emp2);