//tuples - they are fixed 
//readonly is used in TS in tuples
type PersonInfo =readonly [string, number, boolean]

const displayPersonInfo = (person:PersonInfo) =>{

const [name, age, hasDriverLicense] = person;
console.log(`Name: ${name}, Age: ${age}, Driver License: ${hasDriverLicense ? "yes" : "No"}`);

}
const person11: PersonInfo = ['Komal', 25, true];
const person12: PersonInfo = ['Shivam', 22, false];

//==person11.push("coding");
// person11.pop();
// console.log(person11);

displayPersonInfo(person11);
displayPersonInfo(person12);

//assignment
//q-1 define a tuple type called ProductInfo to represent each product, containing the following elements:
//Product name(string)
//Prie(number)
//Quantity in stock(number)
//create two product instances using this tuple type and display their information

type ProductInfo = readonly [string, number, number];

const displayProductInfo = (product:ProductInfo) => {
const [name, price, quantity] = product;
console.log(`The name of the product is ${name} price is ${price} and you ordered ${quantity} quantity`);
}

const product1:ProductInfo = ["Horlicks", 250, 10];
const product2:ProductInfo = ["KitKat", 10 , 10];

displayProductInfo(product1);
displayProductInfo(product2);

//q-2 creating a student management system and want to keep track of students grades for different subjects define a tuple type called 
//subjectGrade to represent a subject and its corresponding grade, containing the following elements:
//subject name (string)
//grade (number)
//create an array of subject grade tuples to store the grades for a student in three different subjects: maths, english and science. calculate 
//and display the average grade of the student.
type subjectGrade = readonly [string, number, string[]];




//q-3 need to store weather data for different cities. define a tuple type called weatherData to represent the weather information
//containing the following elememnts:-
//city name(string)
//temperature in celsius (number)
//weather condition (string)
//create a function called displayWeather that takes an array of weatherData and display the weather information for each city in a user-friendly format.
type WeatherData = readonly [string, number, string];
let cities: any[] = [];

let city1: WeatherData = ['Surat', 30, 'overcast'];
let city2: WeatherData = ['Ahmedabad', 34, 'sunny'];
let city3: WeatherData = ['Rajkot', 27, 'rainy'];

cities.push(city1, city2, city3);

const displayWeather = (cities: any[]) => {
  let cityInfo: object[] = [];
  cities.forEach((city) => {
    let [name, celsius, condition] = city;
    cityInfo.push({ City: name, Temperature: celsius, Condition: condition });
  });
  console.table(cityInfo);
};
displayWeather(cities);



