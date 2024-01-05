//type v/s interfaces
                                            //interface with classes
interface Stud1{
    name: string;
    age: number;
}

interface StudAddr1 {
    city: string;
    addr: string;
}
interface Data1 extends Stud1, StudAddr1 {}          //interface use extends keyword and , sperator

class Bd implements Data1{
    constructor(
        public name: string,
        public age: number,
        public city: string,
        public addr: string
    ){

    }
}

const BDD: Bd = new Bd("komal", 25, "jaipur", "India");
console.log(BDD);

   



                                                //type example
type Stud ={
    name: string;
    age: number;
}
type StudAddr = {
    city: string;
    addr: string;
}
type Data = Stud | StudAddr;   //we can use intersection also here  type Data = Stud & StudAddr

const BioData:Data = {
    name: "komal",
    age: 25,
    city: "jaipur"
}

console.log(BioData);


                                    //interface example
interface Stud1{
    name: string;
    age: number;
}

interface StudAddr1 {
    city: string;
    addr: string;
}
interface Data1 extends Stud1, StudAddr1 {}          //interface use extends keyword and , sperator

const BioData1 :Data1 = {
    name: "komal",
    age: 25,
    city: "jaipur",
    addr: "India"
}

console.log(BioData1);                
