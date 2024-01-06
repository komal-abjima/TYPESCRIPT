const number1 = document.getElementById("num1") as HTMLInputElement
const number2 = document.getElementById("num2") as HTMLInputElement

const AddBtn = document.getElementById("Add") as HTMLButtonElement
const SubBtn = document.getElementById("Sub") as HTMLButtonElement
const MultBtn = document.getElementById("Mult") as HTMLButtonElement
const DivBtn = document.getElementById("Divide") as HTMLButtonElement
const ModBtn = document.getElementById("Modulus") as HTMLButtonElement

const printResult = document.getElementById("result") as HTMLOutputElement

//add number
function AddNumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a+b;
    printResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNumbers)

//subtract
function SubtractNumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a-b;
    printResult.textContent = result.toString()
}
SubBtn.addEventListener("click", SubtractNumbers)

//multiply
function MultiplyNumbers(){
    let a = parseFloat(number1.value)
    let b = parseFloat(number2.value)
    let result = a*b;
    printResult.textContent = result.toString()
}
MultBtn.addEventListener("click", MultiplyNumbers)

//divide
function DivideNumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value)
    let result = a/b;
    printResult.textContent = result.toString()
}
DivBtn.addEventListener("click", DivideNumbers)

//modulus
function ModulusNumber(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value)
    let result = a % b;
    printResult.textContent = result.toString()
}
ModBtn.addEventListener("click", ModulusNumber)

