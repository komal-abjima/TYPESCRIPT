type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    class? : string;    //optional property
    address: {city: string; country: string}
}

const person1: Person = {
    name: "komal",
    age: 25,
    isStudent: false,
    class: "First",
    address: {
        city: "Jaipur",
        country: "India"
    }

}
const person2: Person = {
    name: "prince",
    age: 25,
    isStudent: false,
    address: {
        city: "Jaipur",
        country: "India"
    }

}
const person3: Person = {
    name: "shivam",
    age: 25,
    isStudent: false,
    address: {
        city: "Jaipur",
        country: "India"
    }

}

//assignment
type Product = {
    name: string;
    price: number;
    quantity: number;
}    

const product: Product = {
    name: "Laptop",
    price: 10000,
    quantity: 5
}
const calculateTotalPrice = (product: Product) => {
   return  `${product.name} total cost is ${product.price * product.quantity}`;
}
console.log(calculateTotalPrice(product));