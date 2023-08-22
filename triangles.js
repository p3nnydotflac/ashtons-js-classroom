const prompt = require('prompt-sync') ({ sigint: true });

function mainMenu(){
    console.log("1. Return Angles\n2. Return Perimeter")
    var userInput = prompt("Make selection:")

    if (parseInt(userInput) == 1) {
        returnAngles();
    }

    else if (parseInt(userInput) == 2) {
        returnPerimeter();
    }

    else {
       console.log("Wrong output") 
    }
}

const SideA = prompt("Enter length of side A: ");
const SideB = prompt("Enter length of side B: ");
const SideC = prompt("Enter length of side C: ");

mainMenu();

function calculateAngle(SideA, SideB, SideC) {
    const CosAngle = (SideA * SideA + SideB * SideB - SideC * SideC) / (2 * SideA * SideB);
    return Math.acos(CosAngle) * (180 / Math.PI);
}

function returnAngles() {
    const angleA = calculateAngle(SideB, SideC, SideA);
    const angleB = calculateAngle(SideA, SideC, SideB);
    const angleC = 180 - angleA - angleB;

    console.log("Angle A = " + angleA + " degrees");
    console.log("Angle B = " + angleB + " degrees");
    console.log("Angle C = " + angleC + " degrees");
}

function returnPerimeter(){
    const Perimeter = (parseInt(SideA) + parseInt(SideB) + parseInt(SideC));
    console.log(Perimeter);
}