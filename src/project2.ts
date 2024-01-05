//Temperature Convertor
class Temperature {
    private _celsius: number = 0;

    public get celsius():number{

        return this._celsius;

    }

    public set celsius(newCelsius: number){

        this._celsius = newCelsius;

    }
    //a getter method fahrenheit that coverts celsius to fahrenheit using the formula ( C * 9/5) + 32;
    public get fahrenheit(){

        return(this._celsius * 9)/5 + 32;

    }
    //a setter method 
    public set fahrenheit(newFah: number){

        this._celsius = ((newFah - 32) * 5) /9;

    }
}
const temp = new Temperature();
//for converting celsius into fahrenheit
temp.celsius = 25;
console.log(temp.fahrenheit);

//for converting fahrenheit into celsius
temp.fahrenheit = 77;
console.log(temp.celsius);
