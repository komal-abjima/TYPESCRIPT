                        //UNKNOWN DATATYPE
let num3: unknown;
num3 = 5;
num3 = "abc";
num3 = true

if(typeof num3 === "number"){
    console.log(num3 + 5);
}
else if(typeof num3 === "boolean"){
    console.log(num3);
}

                        //ANY DATATYPE
let num4: any = 2;
num4 = "abc";
num4 = false
console.log(num4);

