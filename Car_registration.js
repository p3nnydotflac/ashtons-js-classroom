const prompt = require('prompt-sync') ({ sigint: true });

const UserCarName = prompt("Enter the make of your car: ");
const UserReg = prompt("Enter the registration of your car: ");

console.log(UserCarName + " " + UserReg);