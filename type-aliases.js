var person1 = {
    name: "komal",
    age: 25,
    isStudent: false,
    class: "First",
    address: {
        city: "Jaipur",
        country: "India"
    }
};
var person2 = {
    name: "prince",
    age: 25,
    isStudent: false,
    address: {
        city: "Jaipur",
        country: "India"
    }
};
var person3 = {
    name: "shivam",
    age: 25,
    isStudent: false,
    address: {
        city: "Jaipur",
        country: "India"
    }
};
var product = {
    name: "Laptop",
    price: 10000,
    quantity: 5
};
var calculateTotalPrice = function (product) {
    return "".concat(product.name, " total cost is ").concat(product.price * product.quantity);
};
console.log(calculateTotalPrice(product));
