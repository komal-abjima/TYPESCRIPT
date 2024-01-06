"use strict";
const number = document.getElementById("num1");
//text string
const string = document.getElementById("quote");
const printButton = document.getElementById("printBtn");
const printText = document.getElementById("printText");
const printValue = document.getElementById("entered");
function printEnteredValue() {
    const numb1 = parseFloat(number.value);
    printValue.textContent = numb1.toString();
}
//string
function printEnteredString() {
    const string1 = document.getElementById("quote").value;
    printValue.textContent = string1.toString();
}
printButton.addEventListener("click", printEnteredValue);
printText.addEventListener("click", printEnteredString);
