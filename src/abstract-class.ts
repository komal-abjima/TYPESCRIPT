//question-1
abstract class Shape{
    constructor(protected color: string){}

    abstract calculateArea(Area:number): number;
    abstract displayArea: () => void;
}

class Circle extends Shape{
    constructor(protected color: string, protected radius: number){
        super(color);
    }
    public calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
   displayArea = () =>{
    console.log(`This is the color ${this.color} and circle with radius ${this.radius}`);
   }
}

const circle: Circle = new Circle("red", 5);
console.log(circle.calculateArea());
circle.displayArea();

//create this for square and rectangle and used getter and setter or static methods
abstract class Shape1{

    constructor(protected color: string){}

    abstract calculateArea(): number;
    abstract displayArea: () => void;   
    
}
class Square extends Shape1{

    constructor(protected color: string, protected side: number){
        super(color);
    }
     public set Area(sides: number){
      

        this.side = sides;

    }

    public get Area():number{
        if(this.side === 0){
            throw new Error('it is not defined');
        }
        return this.side;
    }

    public  calculateArea(): number {

        return this.side * 2;

    }

    displayArea = () =>{

        console.log(`the color of square is ${this.color}`);

    }

   
}
const square: Square = new Square("pink", 5);
console.log(square.calculateArea());
square.displayArea();

//for rectangle
class Rectangle extends Shape1{

    constructor(protected color: string, protected l: number, protected w:number){
        super(color);
    }


    public  calculateArea(): number {

        return this.l * this.w;

    }

    displayArea = () =>{

        console.log(`the color of rectangle is ${this.color}`);

    }

   
}
const rect: Rectangle = new Rectangle("blue", 2, 3);
console.log(rect.calculateArea());
rect.displayArea();