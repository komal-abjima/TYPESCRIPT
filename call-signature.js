/*the function call signature refers to the declaration or definition of a function, which includes the function name, parameters and
return type.It defines the structure and type information of a function without including the function's implementation or body.*/
var student1 = {
    name: "shivam",
    age: 20,
    greet: (function (country) { return "Welcome my name is ".concat(student1.name, ", and my age is ").concat(student1.age, " and I am from ").concat(country); })
};
var student2 = {
    name: "prince",
    age: 20,
    greet: (function (country) { return "Welcome my name is ".concat(student2.name, ", and my age is ").concat(student2.age, " and I am from ").concat(country); })
};
var introduction = function (student1) {
    var name = student1.name, age = student1.age;
    return "Welcome my name is ".concat(name, " and my age is ").concat(age);
};
console.log(introduction(student1));
console.log(student1.greet('India'));
console.log(student2.greet('Nepal'));
