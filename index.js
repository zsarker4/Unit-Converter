/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const feetToMeter = 3.281;
const literToGallon = .264;
const kiloToPound = 2.204;


let convertBtn = document.getElementById("convert-btn");
let userInput = document.getElementById("inputNumber");
let length1 = document.getElementById("math1");
let volume1 = document.getElementById("math2");
let mass1 = document.getElementById("math3");



convertBtn.addEventListener("click", function(){
    let input = parseFloat(userInput.value);
    length1.textContent = input + " meters = " + (input * feetToMeter).toFixed(3) + " feet | " 
    + input + " feet = " + (input / feetToMeter).toFixed(3) + " meters"

    volume1.textContent = input + " liters = " + (input * literToGallon).toFixed(3) + " gallons | " 
    + input + " gallons = " + (input / literToGallon).toFixed(3) + " liters"

    mass1.textContent = input + " kilos = " + (input * kiloToPound).toFixed(3) + " pounds | " 
    + input + " pounds = " + (input / kiloToPound).toFixed(3) + " kilos"
})