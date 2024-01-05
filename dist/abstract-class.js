"use strict";
//question-1
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea = () => {
        console.log(`This is the color ${this.color} and circle with radius ${this.radius}`);
    };
}
const circle = new Circle("red", 5);
console.log(circle.calculateArea());
circle.displayArea();
//create this for square and rectangle and used getter and setter or static methods
class Shape1 {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Square extends Shape1 {
    color;
    side;
    constructor(color, side) {
        super(color);
        this.color = color;
        this.side = side;
    }
    set Area(sides) {
        this.side = sides;
    }
    get Area() {
        if (this.side === 0) {
            throw new Error('it is not defined');
        }
        return this.side;
    }
    calculateArea() {
        return this.side * 2;
    }
    displayArea = () => {
        console.log(`the color of square is ${this.color}`);
    };
}
const square = new Square("pink", 5);
console.log(square.calculateArea());
square.displayArea();
//for rectangle
class Rectangle extends Shape1 {
    color;
    l;
    w;
    constructor(color, l, w) {
        super(color);
        this.color = color;
        this.l = l;
        this.w = w;
    }
    calculateArea() {
        return this.l * this.w;
    }
    displayArea = () => {
        console.log(`the color of rectangle is ${this.color}`);
    };
}
const rect = new Rectangle("blue", 2, 3);
console.log(rect.calculateArea());
rect.displayArea();
