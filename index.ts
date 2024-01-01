//console.log("Hello");
// let age: number = 20//
// if(age < 50)
//     age += 10
// console.log(age)
//age = 'a';   here it gives an error

let sales: number = 123_456;
let course: string = "TypeScript";
let is_published = true;

//any type
let level;
//without any it gives an error
function render(document: any){
    console.log(document)
}


//array 
let number: number[] = [1,2,3]
let numberAny = [];   //any type array
numberAny[0] = 1
numberAny[1] = '2'
number.forEach(n => n.valueOf());


//tuple
let tuple: [number, string]  = [1, "abc"];
//tuple.push(1)


//enum
const enum Size { Small = 1, Medium, Large}
let mySize: Size = Size.Medium
console.log(mySize)

//function
//taxYear? nullable values
function calculateTax(income: number, taxYear = 2022): number {
    if(taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

console.log(calculateTax(10_000))

//objects

//typealiases - define one time and use multiple times
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void

}

let employe: Employee = {
    id: 1,
    name: "komal",
    retire: (date: Date) => {
        console.log(date)
    }
}

//union types
function kgToLbs(weight: number | string) : number {
    //Narrowing
    if(typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2
}

kgToLbs(10);
kgToLbs('10Kg');

//intersection
type Draggable = {
    drag: () => void
}
type Resizable = {
    resize: () => void
}
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}


//Literal types
type Quantity = 50 | 100;
let quantity: Quantity = 100;
type Metric = 'cm' | 'inch';


//nullable types
function greet(name: string | null | undefined){
    if(name)
        console.log(name.toUpperCase());
    else
        console.log("Hello");

}
greet(undefined);


type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : {birthday : new Date() }
}
let Customer = getCustomer(1)
//optional property access operator
console.log(Customer?.birthday);
console.log(Customer?.birthday.getFullYear());

//optional element access operator
//customers?.[0]

//optional call
let log: any = null;
log?.('a');



