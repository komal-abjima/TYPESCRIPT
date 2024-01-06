const number = document.getElementById("num1") as HTMLInputElement
//text string
const string = document.getElementById("quote") as HTMLInputElement
const printButton = document.getElementById("printBtn") as HTMLButtonElement
const printText = document.getElementById("printText") as HTMLButtonElement

const printValue = document.getElementById("entered") as HTMLOutputElement


function printEnteredValue(): void{
    const numb1 = parseFloat(number.value);
    printValue.textContent = numb1.toString();

}

//string
function printEnteredString(): void{
    const string1: string = (<HTMLInputElement>document.getElementById("quote")).value;
    printValue.textContent = string1.toString();

}

printButton.addEventListener("click", printEnteredValue);
printText.addEventListener("click", printEnteredString);