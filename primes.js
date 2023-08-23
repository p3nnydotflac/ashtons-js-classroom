const prompt = require('prompt-sync')({ sigint: true });

// main menu function prompts the user for a number and then parses the prompt for an integer
// calls primechecker to check if the inputted integer is prime
function mainMenu() {
    const input = parseInt(prompt("Enter any whole number: "));
    for (let i = 2; i <= input; i++) { // Use let for loop counter
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

// if the input is 1 or lower it returns false
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    // declares j = 2, j must be less than input, at the end of every loop j increases by 1
    for (let j = 2; j <= Math.sqrt(input); j++) { // Use j for loop counter
        // if the input can be divided by j return false
        if (number % j == 0) {
            return false;
        }
    }

    return true;
}

mainMenu();
