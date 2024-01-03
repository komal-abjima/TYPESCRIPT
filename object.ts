const person:{
    name: string;
    age: number;
    isActive: boolean;
    address: { city: string; country: string}
} = {
    name: "Komal sharma",
    age: 25,
    isActive: true,
    address: {
        city: "Jaipur",
        country: "India"
    }
}
console.log(person.address.country);
person.address.country = "Us";
console.log(person.address.country);


