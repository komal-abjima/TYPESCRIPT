//union
const inputValue = (value: string | number | boolean) => void {
}

inputValue("Hello");
inputValue(55);
inputValue(true);

//q1= create a function that can accept different types of arguments and perform different actions based on the type of the input.
//suppose we want to create a function that doubles the value if the input is a number, or converts the input to uppercase if it is a string
//use union type

const double_Upper = (elem: number | string) =>{

    if(typeof elem === "number")
        return elem * 2;
    if(typeof elem === "string")
        return elem.toUpperCase();
    else{
        throw console.error('Invalid input data..');
        
    }

}

console.log(double_Upper(2));
console.log(double_Upper("komal"));

// q-2
const format = (value: number | boolean | string) => {
    if(typeof value === "number"){
        return  `$${value}`
    }else if (typeof value === 'boolean'){
        return  value = true ? 'yes' : 'no'
    }else if(typeof value === 'string'){
        return value.charAt(0).toUpperCase()+value.slice(1)
    }
}
console.log(format(true));
console.log(format("ram"));
console.log(format(12));

//intersection - indicate by &
type Person2 = {
    name:string;
    age:number;
}
type Employee = {
    emp_id: number;
    department: string;
}
type EmployeeDetails = Person2  & Employee;

const employee:EmployeeDetails = {
    name: "komal",
    age: 25,
    emp_id: 101,
    department: 'IT'
}

const personalInfo: Person2 = {
    name: "komal",
    age: 25
}


//q-1
type User2  = {
    name: string;
    age:number;
}
type MyLocation = {
    city: string;
    country: string;
}
const user: User2 = {name: "komal", age: 25};
const myLocation: MyLocation = {city: "jaipur", country: "India"};





