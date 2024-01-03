var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDriverLicense = person[2];
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Driver License: ").concat(hasDriverLicense ? "yes" : "No"));
};
var person11 = ['Komal', 25, true];
var person12 = ['Shivam', 22, false];
//==person11.push("coding");
// person11.pop();
// console.log(person11);
displayPersonInfo(person11);
displayPersonInfo(person12);
var displayProductInfo = function (product) {
    var name = product[0], price = product[1], quantity = product[2];
    console.log("The name of the product is ".concat(name, " price is ").concat(price, " and you ordered ").concat(quantity, " quantity"));
};
var product1 = ["Horlicks", 250, 10];
var product2 = ["KitKat", 10, 10];
displayProductInfo(product1);
displayProductInfo(product2);
var cities = [];
var city1 = ['Surat', 30, 'overcast'];
var city2 = ['Ahmedabad', 34, 'sunny'];
var city3 = ['Rajkot', 27, 'rainy'];
cities.push(city1, city2, city3);
var displayWeather = function (cities) {
    var cityInfo = [];
    cities.forEach(function (city) {
        var name = city[0], celsius = city[1], condition = city[2];
        cityInfo.push({ City: name, Temperature: celsius, Condition: condition });
    });
    console.table(cityInfo);
};
displayWeather(cities);
