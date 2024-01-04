"use strict";
const prod = {
    name: "Laptop",
    price: 12500,
    quantity: 5
};
const prod2 = {
    name: "PC",
    price: 125000,
    quantity: 4
};
//console.log(prod);
const calculateTotalPrices = (product) => {
    const { name, price, quantity } = product;
    //return price * quantity;
    return `total price of ${name} is ${price * quantity}`;
};
console.log(calculateTotalPrices(prod));
console.log(calculateTotalPrices(prod2));
