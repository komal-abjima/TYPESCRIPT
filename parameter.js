var greet3 = function (name, id, age) {
    if (id === void 0) { id = 1; }
    if (age) {
        return "Welcom ".concat(name, " your id is ").concat(id, " and age is ").concat(age);
    }
    else {
        return "Welcome ".concat(name, " your id is ").concat(id, " ");
    }
};
var emp1 = greet3("komal");
console.log(emp1);
var emp2 = greet3("shivam", 24);
console.log(emp2);
