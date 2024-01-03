//using square brackets

const arr: number[] = [1,2,3,4];

//using the array constructor

const arr1: number[] = new Array(1,2,3,4);

//using the array.of method

const names: string[] = Array.of("komal", "sharma");
console.log(names);

const value2 = {name: "Komal", age: 25};
console.log(typeof value2);

//array
const fruits = ["apple", "banana", "orange"];
//push operation
const updatedfruits = fruits.push("kiwi");
//pop 
const remove = fruits.pop();
console.log(updatedfruits);
console.log(remove);
console.log(fruits);

// iterate using for loop
for(let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//for...of loop
for(const fruit of fruits){
    console.log(fruit);
}

//forEach loop
fruits.forEach((values: string) => console.log(values));

//for in loop
for(const fruit2 in fruits){
    console.log(fruits[fruit2]);
}



