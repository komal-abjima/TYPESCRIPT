interface Product{
    name: string;
    price: number;
    quantity: number;
}

const prod:Product = {
    name: "Laptop",
    price: 12500,
    quantity: 5
}
const prod2:Product = {
    name: "PC",
    price: 125000,
    quantity: 4
}

//console.log(prod);
const calculateTotalPrices:(product: Product) => string = (product: Product) => {

    const {name,price, quantity} = product;
    //return price * quantity;
    return `total price of ${name} is ${price * quantity}`;

}

console.log(calculateTotalPrices(prod));
console.log(calculateTotalPrices(prod2));