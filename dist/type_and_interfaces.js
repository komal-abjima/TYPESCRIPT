"use strict";
class Bd {
    name;
    age;
    city;
    addr;
    constructor(name, age, city, addr) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.addr = addr;
    }
}
const BDD = new Bd("komal", 25, "jaipur", "India");
console.log(BDD);
const BioData = {
    name: "komal",
    age: 25,
    city: "jaipur"
};
console.log(BioData);
const BioData1 = {
    name: "komal",
    age: 25,
    city: "jaipur",
    addr: "India"
};
console.log(BioData1);
